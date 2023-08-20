const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //Recommendation from Bcrypt is to Salt then Hash Asynchronously
    const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    //Save new user document to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
