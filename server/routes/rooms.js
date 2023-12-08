const express = require("express");
const { getRooms } = require("../controllers/rooms.js");

const router = express.Router();

router.get("/", getRooms);

module.exports = router;
