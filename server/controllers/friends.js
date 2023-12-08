const { Friends } = require("../models/friends.js");

const getFriends = async (req, res) => {
  try {
    const friends = await Friends.find({ userId: "Jack" }, { friendList: 1 }); //some query to find all the users friends
    res.status(200).json(friends);
  } catch (error) {
    res.status(400).json({
      message: `There is an error fetching friends from the databse. See error mesage : ${err.message}`,
    });
  }
};

module.exports = { getFriends };
