const mongoose = require("mongoose");

const fundraiserSchema = mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  members: {
    type: Array,
  },
  suburb: {
    type: String,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  moneyraised: {
    type: Number,
    required: true,
  },
  date: {
    type: Array,
    required: true,
  },
});

const Fundraisers = mongoose.model("Fundraisers", fundraiserSchema);

module.exports = { Fundraisers };
