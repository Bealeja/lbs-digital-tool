const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  badges: {
    type: Array,
    required: true,
  },
  badgestatistics: {
    type: Array,
    required: true,
  },
  eventlist: {
    type: Array,
    required: false,
  },
  jobs: {
    type: Array,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = { User };
