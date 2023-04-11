import mongoose from "mongoose";

const brandScherma = new mongoose.Schema({
  name: String,
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    { timestamps: true, versionKey: false },
  ],
});

export default mongoose.model("Brand", brandScherma);
