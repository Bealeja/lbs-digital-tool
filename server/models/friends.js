const mongoose = require("mongoose");

const FriendsSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  friendList: {
    type: Array,
    required: true,
  },
});

const Friends = mongoose.model("Friends", FriendsSchema);

module.exports = { Friends };
