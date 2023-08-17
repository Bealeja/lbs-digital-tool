const mongoose = require("mongoose");

const fundraiserSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  picturePath: String,
});

const Fundraisers = mongoose.model("fundraisers", fundraiserSchema);

module.exports = { Fundraisers };
