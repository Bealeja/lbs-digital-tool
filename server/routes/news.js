const express = require("express");
const { getNewsPosts } = require("../controllers/news.js");

const router = express.Router();

/* Read */
router.get("/", getNewsPosts);

module.exports = router;
