const express = require("express");
const fixedAccount = require("../models/fixedAccount.model");

const router = express.Router();

router.get("", async (req, res) => {
	try {
		const items = await fixedAccount.find().lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const items = await fixedAccount.findById(req.params.id).lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.post("", async (req, res) => {
	try {
		const items = await fixedAccount.create(req.body).lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const items = await fixedAccount
			.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			})
			.lean()
			.exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const items = await fixedAccount
			.findByIdAndDelete(req.params.id)
			.lean()
			.exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
