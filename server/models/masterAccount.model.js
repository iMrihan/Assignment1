const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema(
	{
		balance: { type: "number", required: true },
		branchDetail_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "branchDetail",
			required: true,
		},
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
		accounts_id: [
			{ type: mongoose.Schema.Types.ObjectId, ref: "savingAccount" },
			{ type: mongoose.Schema.Types.ObjectId, ref: "fixedAccount" },
		],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("masterAccount", masterAccountSchema);
