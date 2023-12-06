const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    ref: "Room",
  },
  users: [
    {
      type: String,
      ref: "User",
    },
  ],
  messages: [
    {
      sender: {
        type: String,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
