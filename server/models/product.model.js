const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
