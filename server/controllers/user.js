const { User } = require("../models/user.js");

//Express error handling must always have 4 arguments for the middleware to debug the rerror handling: https://expressjs.com/ru/api.html
const getUser = async (req, res) => {
  try {
    const user = req.query.username;
    const reponse = await User.find({ username: user });
    res.status(200).json(response);
    console.log("User Aquired");
  } catch (err) {
    res.status(400).json({ message: `There is an error ${err.message}` });
  }
};

module.exports = { getUser };
