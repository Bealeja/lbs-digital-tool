const { Messages } = require("../models/message.js");

const getMessages = async (req, res) => {
  try {
    const parsedRoomID = req.query.roomID;
    const messages = await Messages.find({ roomId: parsedRoomID }).sort({
      timeStamp: 1,
    });
    res.status(200).json(messages);
    console.log("messages retrieved successfully");
  } catch (error) {
    res.status(500).json({
      error: `Attempting to get messages from database in server controller caused error: ${error.message}`,
    });
  }
};

const storeMessages = async (req, res) => {
  try {
    console.log(`This is the output: ${req}`);
    // const newMessage = new Messages(req.body)
  } catch (error) {
    return `Attempting to post messages to database in server controller caused error: ${error.message}`;
  }
};

module.exports = { getMessages, storeMessages };
