const { Messages } = require("../models/message.js");

const getMessages = async (req, res) => {
  try {
    const messages = await Messages.find(); //Need to add room, userID
    res.status(200).json(messages);
    console.log("messages retrieved successfully");
    return messages;
  } catch (error) {
    return `Attempting to get messages from database in server controller caused error: ${error.message}`;
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
