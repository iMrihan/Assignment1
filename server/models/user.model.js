const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    password: { type: String, require: true },
    email: { type: String, unique: true, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
