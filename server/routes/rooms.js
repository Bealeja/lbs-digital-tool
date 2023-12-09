const express = require("express");
const { getRooms, postRooms } = require("../controllers/rooms.js");

const router = express.Router();

router.get("/", getRooms);
router.post("/", postRooms);

module.exports = router;
