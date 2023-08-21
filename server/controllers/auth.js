const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.js");

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let adminCheck = false;
    const mailServer = email.slice(email.indexOf("@"));

    if (mailServer === "@littlebigsteps") {
      adminCheck = true;
    }

    console.log(`This is firstName: ${typeof firstName}, ${firstName}`);
    console.log(`This is lastName: ${typeof lastName}, ${lastName}`);
    console.log(`This is email: ${typeof email}, ${email}`);
    console.log(`This is password: ${typeof password}, ${password}`);

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
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
    next();
  }
};

/* LOGGING IN */
const login = async (req, res) => {
  try {
    //parse email and password from request
    const { email, password } = req.body;

    //find email in database
    const user = await User.findOne({ email: email }, { admin: true });

    console.log(user);

    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    //Check if password matches using Bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
