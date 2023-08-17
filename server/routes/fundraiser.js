const express = require("express");
const { getActiveFundraisers } = require("../controllers/fundraisers.js");

const router = express.Router();

/* Read */
router.get("/", getActiveFundraisers);

module.exports = router;
