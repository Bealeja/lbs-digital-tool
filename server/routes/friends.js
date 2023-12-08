const express = require("express");
const { getFriends } = require("../controllers/friends.js");

const router = express.Router();

router.get("/", getFriends);

module.exports = router;
