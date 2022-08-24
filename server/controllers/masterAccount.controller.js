const express = require("express");
const masterAccount = require("../models/masterAccount.model");

const router = express.Router();

router.get("", async (req, res) => {
	try {
		const items = await masterAccount
			.find()
			.populate({
				path: "user_id",
				select: [
					"firstName",
					"middleName",
					"lastName",
					"age",
					"email",
					"address",
					"gender",
					"type",
				],
			})
			.lean()
			.exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const items = await masterAccount.findById(req.params.id).lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.post("", async (req, res) => {
	try {
		const items = await masterAccount.create(req.body).lean().exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const items = await masterAccount
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.lean()
			.exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const items = await masterAccount
			.findByIdAndDelete(req.params.id)
			.lean()
			.exec();
		return res.send(items);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
