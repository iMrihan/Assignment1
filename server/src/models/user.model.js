const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: "string",
			required: true,
			minimumlength: 3,
			maximumlength: 30,
		},
		lastName: {
			type: "string",
			required: false,
			minimumlength: 3,
			maximumlength: 30,
		},
		age: { type: "number", required: true },
		email: { type: "string", required: true, unique: true },
		profileImage: [{ type: String, required: true }],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("user", userSchema);
