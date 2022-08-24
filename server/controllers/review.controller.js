const express = require("express");
const Review = require("../models/review.model");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/test", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/create", async (req, res) => {
  let review = new Review(req.body);
  let result = await review.save();
  let { _id, product_id } = review;

  console.log("hello");
  let product = await Product.findById({ _id: product_id });
  product.reviews.push(_id);
  await product.save();

  res.send(result);
});
router.delete("/:id", async (req, res) => {
  let result = await Review.deleteOne({ _id: req.params.id });
  res.send(result);
});
module.exports = router;
