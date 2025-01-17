import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    desc: { type: String, required: true },
    mainImage: { type: String, required: true },
    img: [{ type: String, required: true }],
    category: { type: String, required: true },
    size: { type: String },
    sizes: [{ type: String }],
    color: { type: String },
    status: { type: String, default: "active" },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
    variants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variants",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

// mongoose.models = {};
// export default mongoose.model("Product", ProductSchema);
