const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
	{
		body: { type: "string", required: false },

		post_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "post",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("comment", commentSchema);
