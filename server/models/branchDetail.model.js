const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
	{
		name: { type: "string", required: true },
		address: { type: "string", required: true },

		IFSC: { type: "string", required: true },
		MICR: { type: "number", required: true },
        masterAccount_id : { type: mongoose.Schema.Types.ObjectId, ref: "masterAccount",required: true},

	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("branchDetail", branchSchema);
