const mongoose = require("mongoose");

const RoomsSchema = mongoose.Schema({
  roomID: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
});

const Rooms = mongoose.model("Rooms", RoomsSchema);

module.exports = { Rooms };
