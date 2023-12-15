const { User } = require("../models/user.js");

const getUser = async (req, res) => {
  try {
    userName = req.query.username;
    const user = await User.find({ username: userName });
    res.status(200).json(user);
    console.log("User Aquired");
  } catch (err) {
    res.status(400).json({ message: `There is an error ${err.message}` });
  }
};

module.exports = { getUser };
