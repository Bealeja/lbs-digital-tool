const mongoose = require("mongoose");

const fundraiserSchema = mongoose.Schema({
  heading: {
    type: String,
  },
  content: {
    type: String,
  },
  goal: {
    type: Number,
  },
  raised: {
    type: Number,
  },
  photo: String,
});

const Fundraisers = mongoose.model("Fundraisers", fundraiserSchema);

module.exports = { Fundraisers };
