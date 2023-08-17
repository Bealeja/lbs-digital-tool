const { Fundraisers } = require("../models/fundraiser.js");

const getActiveFundraisers = async (req, res, next) => {
  try {
    const fundraisers = await Fundraisers.find();
    res.status(200).json(fundraisers);
    console.log("Fundraisers Aquired");
    next();
  } catch (err) {
    res.status(404).json({
      message: `There is an error fetching active fundraisers. See error mesage : ${err.message}`,
    });
    next();
  }
};

module.exports = { getActiveFundraisers };
