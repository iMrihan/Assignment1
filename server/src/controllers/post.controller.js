const express = require("express");
const post = require("../models/post.model");
const router = express.Router();

router.get("", async (req, res) => {
	try {
		const posts = await post.find().lean().exec();
		return res.status(200).send(posts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const posts = await post.findById(req.params.id).lean().exec();
		return res.status(200).send(posts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const posts = await post.create(req.body);
		return res.status(200).send(posts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const posts = await post
			.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			})
			.lean()
			.exec();

		return res.status(200).send(posts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const posts = await post.findByIdAndDelete(req.params.id);

		return res.status(200).send(posts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
