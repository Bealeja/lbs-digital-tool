const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    ref: "Room",
  },
  sender: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    requried: true,
  },
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = { Messages };
