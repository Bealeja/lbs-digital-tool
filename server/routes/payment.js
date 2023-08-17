const express = require("express");
const { createcheckoutsession } = require("../controllers/payment.js");

const router = express.Router();

router.post("/", createcheckoutsession);

module.exports = router;
