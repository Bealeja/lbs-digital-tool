import mongoose from "mongoose";

const fundraiserSchema = mongoose.Schema({
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

const Fundraisers = mongoose.model("Fundraisers", fundraiserSchema);

export default Fundraisers;
