const express = require("express");
const comment = require("../models/comment.model");
const router = express.Router();

router.get("", async (req, res) => {
	try {
		const comments = await comment.find().lean().exec();
		return res.status(200).send(comments);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const comments = await comment.findById(req.params.id).lean().exec();
		return res.status(200).send(comments);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const comments = await comment.create(req.body);
		return res.status(200).send(comments);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const comments = await comment
			.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			})
			.lean()
			.exec();

		return res.status(200).send(comments);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const comments = await comment
			.findByIdAndDelete(req.params.id)
			.lean()
			.exec();

		return res.status(200).send(comments);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
