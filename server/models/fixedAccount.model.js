const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema(
	{
		account_number: { type: "number", required: true, unique: true },
		balance: { type: "number", required: true },

		interestRate: { type: "number", required: true },
		startDate: { type: "string", required: true },
		maturityDate: { type: "string", required: true },
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("fixedAccount", fixedAccountSchema);
