const express = require("express");
const savingAccount = require("../models/savingAccount.model");

const router = express.Router();

router.get("", async (req, res) => {
	try {
		const items = await savingAccount.find().lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const items = await savingAccount.findById(req.params.id).lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.post("", async (req, res) => {
	try {
		const items = await savingAccount.create(req.body).lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const items = await savingAccount
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
		const items = await savingAccount
			.findByIdAndDelete(req.params.id)
			.lean()
			.exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
