const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const adminCheck = false;
    const mailServer = email.slice(email.indexOf("@"));

    if (mailServer === "@littlebigsteps.org") {
      adminCheck = true;
    }
    //send out an email verification before proceeding

    //Recommendation from Bcrypt is to Salt then Hash Asynchronously
    const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      admin: adminCheck,
    });

    //Save new user document to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    //parse email and password from request
    const { email, password } = req.body;

    //find email in database
    const user = await User.findOne({ email: email });
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
