const { Fundraisers } = require("../models/fundraiser.js");

const getFundraisersWithin5km = async (req, res) => {
  try {
    const fundraisers = await Fundraisers.find();
    res.status(200).json(fundraisers);
    console.log("Fundraisers Aquired");
  } catch (err) {
    res.status(404).json({
      message: `There is an error fetching active fundraisers. See error mesage : ${err.message}`,
    });
  }
};

module.exports = { getFundraisersWithin5km };
