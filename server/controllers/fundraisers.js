const { Fundraisers } = require("../models/fundraiser.js");

const getPostiveandNegativeCoordinate = (distance, originalCoordinate) => {
  const factor = 111; //distance per degree of latitiude
  const originalCoordinateTypeNumber = Number(originalCoordinate);

  // console.log(typeof originalCoordinate);
  const coordinateDiff = distance / factor;

  const newCoordinatePositive = originalCoordinateTypeNumber + coordinateDiff;
  const newCoordinateNegative = originalCoordinateTypeNumber - coordinateDiff;

  console.log(newCoordinateNegative);
  console.log(newCoordinatePositive);

  return [newCoordinatePositive, newCoordinateNegative];
};

const getFundraisersWithin5km = async (req, res) => {
  try {
    //Define distance
    const distance = 5;

    console.log(`This is the output: ${req.query.lat}`);
    //Get positive and negative latitude coordinates
    const newLatPostiveandNegativeArray = getPostiveandNegativeCoordinate(
      distance,
      req.query.lat
    );
    const newLatPostive = newLatPostiveandNegativeArray[0];
    const newLatNegative = newLatPostiveandNegativeArray[1];

    //Get positive and negative longitude coordinates
    const newLongPostiveandNegativeArray = getPostiveandNegativeCoordinate(
      distance,
      req.query.lon
    );
    const newLongPositive = newLongPostiveandNegativeArray[0];
    const newLongNegative = newLongPostiveandNegativeArray[1];

    const fundraisers = await Fundraisers.find({
      latitude: { $gte: newLatNegative, $lte: newLatPostive },
      longitude: { $gte: newLongNegative, $lte: newLongPositive },
    });

    res.status(200).json(fundraisers);
    console.log("5km Fundraisers Aquired");
  } catch (err) {
    res.status(404).json({
      message: `There is an error fetching active fundraisers. See error mesage : ${err.message}`,
    });
  }
};

const getFundraisersWithin10km = async (req, res) => {
  try {
    const fundraisers = await Fundraisers.find();
    res.status(200).json(fundraisers);
    console.log("10km Fundraisers Aquired");
  } catch (err) {
    res.status(404).json({
      message: `There is an error fetching active fundraisers. See error mesage : ${err.message}`,
    });
  }
};

const getFundraisersWithin15km = async (req, res) => {
  try {
    const fundraisers = await Fundraisers.find();
    res.status(200).json(fundraisers);
    console.log("15km Fundraisers Aquired");
  } catch (err) {
    res.status(404).json({
      message: `There is an error fetching active fundraisers. See error mesage : ${err.message}`,
    });
  }
};

const getMyFundraisers = async (req, res) => {
  try {
    const userID = req.query.userID;
    const fundraisers = await Fundraisers.find({ owner: userID })
      .sort({ _id: 1 })
      .exec();

    res.status(200).json(fundraisers);
    console.log("My fundraisers aquired");
  } catch (err) {
    res.status(404).json({
      message: `There is an error fetching active fundraisers. See error mesage : ${err.message}`,
    });
  }
};

module.exports = {
  getFundraisersWithin5km,
  getFundraisersWithin10km,
  getFundraisersWithin15km,
  getMyFundraisers,
};
