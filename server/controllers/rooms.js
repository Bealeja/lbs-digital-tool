const { Rooms } = require("../models/Rooms.js");

const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find(); //some query to find all the users friends
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({
      message: `There is an error fetching friends from the databse. See error mesage : ${err.message}`,
    });
  }
};

module.exports = { getRooms };
