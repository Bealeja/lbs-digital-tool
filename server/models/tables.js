import mongoose from "mongoose";

const tablesSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  statistics: Array,
});
