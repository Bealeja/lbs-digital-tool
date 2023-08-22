const { Tables } = require("../models/tables.js");

//Express error handling must always have 4 arguments for the middleware to debug the rerror handling: https://expressjs.com/ru/api.html
const getTableData = async (req, res) => {
  try {
    const data = await Tables.find();
    res.status(200).json(data);
    console.log("Table Data Aquired");
  } catch (err) {
    res.status(400).json({ message: `There is an error ${err.message}` });
  }
};

module.exports = { getTableData };
