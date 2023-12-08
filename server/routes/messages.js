const express = require("express");
const { getMessages } = require("../controllers/messages.js");
const { storeMessages } = require("../controllers/messages.js");

const router = express.Router();

router.get("/", getMessages);

module.exports = router;
