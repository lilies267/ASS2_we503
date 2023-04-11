import mongoose from "mongoose";
import mongooesPaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    original_price: Number,
    description: String,

    brandId: {
      type: mongoose.Types.ObjectId,
      ref: "Brand",
    },
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongooesPaginate);
export default mongoose.model("Product", productSchema);
