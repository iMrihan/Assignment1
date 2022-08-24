const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

router.get("/products", async (req, res) => {
  let products = await Product.find().populate("reviews");
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "No Product found" });
  }
});

router.delete("/product/:id", async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

router.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id }).populate(
    "reviews"
  );

  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No record found" });
  }
});

router.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

module.exports = router;
