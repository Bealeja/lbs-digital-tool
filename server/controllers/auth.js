const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.js");

const register = async (req, res) => {
  try {
    let adminCheck = false;
    const { firstName, lastName, email, password } = req.body;
    const mailServer = email.slice(email.indexOf("@"));

    if (mailServer === "@littlebigsteps") {
      adminCheck = true;
    }

    // Recommendation from Bcrypt is to Salt then Hash Asynchronously
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    //Issue: If you comment out this, it works, so you need to find out why User is causing a problem.
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      admin: adminCheck,
    });

    //Save new user document to the database
    const savedUser = await newUser.save();
    console.log("User Registered");
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
const login = async (req, res) => {
  try {
    //parse email and password from request
    const { email, password } = req.body;
    console.log("login form submitted");
    console.log(JSON.stringify(email), JSON.stringify(password));

    //find email in database
    const user = await User.findOne({ email: email });

    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    //Check if password matches using Bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    delete user.password;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("User Logged In ");
    res.status(200).json({ token, id });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(`Error at login controller: ${err}`);
  }
};

module.exports = { register, login };
