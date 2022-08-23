const express = require("express");
const postLike = require("../models/product");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const postLikes = await postLike.find().lean().exec();
    return res.status(200).send(postLikes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postLikes = await postLike.findById(req.params.id).lean().exec();
    return res.status(200).send(postLikes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const postLikes = await postLike.create(req.body);
    return res.status(200).send(postLikes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const postLikes = await postLike
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    return res.status(200).send(postLikes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postLikes = await postLike
      .findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(postLikes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
