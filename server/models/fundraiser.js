import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  picturePath: String,
});
