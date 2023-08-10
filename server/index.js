import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Allows access to dotenv file for MongoDB connection
dotenv.config();

//Express configuration for JSON
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6001;
//These params set to true due to mongo depreciation
//Ref: https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1#:~:text=1,that%20prevents%20you%20from%20connecting.
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) =>
    console.log(`${error} did not connect to mongoDB database`)
  );
