const express = require("express");
const {
  getFundraisersWithin5km,
  getFundraisersWithin10km,
  getFundraisersWithin15km,
  getMyFundraisers,
} = require("../controllers/fundraisers.js");

const router = express.Router();

/* Read */

router.get("/5km", getFundraisersWithin5km);

router.get("/10km", getFundraisersWithin10km);

router.get("/15km", getFundraisersWithin15km);

router.get("/myFundraisers", getMyFundraisers);

module.exports = router;
