const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
	{
		body: { type: "string", required: false },
		likes: { type: "number", required: false, default: 0 },
		image: { type: "string", required: false },
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

module.exports = mongoose.model("post", postSchema);
