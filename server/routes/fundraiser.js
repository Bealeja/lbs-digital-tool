const express = require("express");
const { getFundraisersWithin5km } = require("../controllers/fundraisers.js");

const router = express.Router();

/* Read */
router.get("/", getFundraisersWithin5km);

module.exports = router;
