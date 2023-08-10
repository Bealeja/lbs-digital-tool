import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  urlLink: {
    type: String,
    required: true,
  },
  picturePath: String,
});

const News = mongoose.model("News", newsSchema);

export default News;
