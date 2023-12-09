const { Rooms } = require("../models/Rooms.js");

const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find(); //some query to find all the users friends
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({
      message: `There is an error fetching rooms from the database. See error mesage : ${error.message}`,
    });
  }
};

const postRooms = async (req, res) => {
  console.log(`This is the output: ${JSON.stringify(req.body.userArray)}`);
  try {
    const createRoom = await Rooms.create({
      roomID: req.body.roomID,
      users: req.body.userArray,
    });
    res.status(200).json(createRoom);
  } catch (error) {
    res.status(500).json({
      error: `failed to post rooms in database from server. See error message : ${error.message}`,
    });
  }
};

module.exports = { getRooms, postRooms };
