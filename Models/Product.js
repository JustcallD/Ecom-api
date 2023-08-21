const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    require: true,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Category",
    // required: true,
  },
  //   brand: String,
  //   images: [{ type: String }], // Array of image URLs
  //   ratings: [
  //     {
  //       user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to user model
  //       rating: Number,
  //       review: String,
  //     },
  //   ],
  //   stock: {
  //     quantity: Number,
  //     status: {
  //       type: String,
  //       enum: ["In Stock", "Out of Stock"],
  //       default: "In Stock",
  //     },
  //   },
  //   specifications: [
  //     {
  //       name: String,
  //       value: String,
  //     },
  //   ],
  //   reviews: [
  //     {
  //       user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to user model
  //       rating: Number,
  //       review: String,
  //       createdAt: { type: Date, default: Date.now },
  //     },
  //   ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
