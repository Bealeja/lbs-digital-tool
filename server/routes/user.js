const express = require("express");
const { getUser } = require("../controllers/user.js");

const router = express.Router();
/* Read */
router.get("/userprofile", getUser);

module.exports = router;
