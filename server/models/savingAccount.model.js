const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema(
	{
		account_number: { type: "number", required: true, unique: true },
		balance: { type: "number", required: true },

		interestRate: { type: "number", required: true },
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
		branchDetail_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "branchDetail",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("savingAccount", savingAccountSchema);
