import Tables from "../models/tables.js";

//Express error handling must always have 4 arguments for the middleware to debug the rerror handling: https://expressjs.com/ru/api.html
export const getTableData = async (req, res, next) => {
  try {
    const data = await Tables.find();
    res.status(200).json(data);
    console.log("Table Data Aquired");
    next();
  } catch (err) {
    res.status(400).json({ message: `There is an error ${err.message}` });
    next();
  }
};
