const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
