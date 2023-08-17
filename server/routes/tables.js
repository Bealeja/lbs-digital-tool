const express = require("express");
const { getTableData } = require("../controllers/tables.js");

const router = express.Router();
/* Read */
router.get("/", getTableData);

module.exports = router;
