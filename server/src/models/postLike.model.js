const mongoose = require("mongoose");

const postLikeSchema = new mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
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

module.exports = mongoose.model("postLike", postLikeSchema);
