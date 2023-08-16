import mongoose from "mongoose";

const tablesSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  statistics: {
    type: Array,
    required: true,
  },
});

const Tables = mongoose.model("Tables", tablesSchema);

export default Tables;
