import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
// E.g. Health => Doctor
// E.g. Strategy => business strategy

const planSchema = new Schema(
  {
    hmo: {
      type: ObjectId,
      ref: "Profile",
      required: [true, "HMO Profile cannot be empty"],
    },
    title: {
      type: String,
      required: [true, "You must provide a plan title"],
    },
  },
  { timestamps: true }
);
const Plans = mongoose.model("Plans", planSchema);
export default Plans;
