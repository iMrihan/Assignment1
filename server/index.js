const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const connectDB = require("./src/config/db");

const userController = require("./src/controllers/user.controller");
const postController = require("./src/controllers/post.controller");
const postLikeController = require("./src/controllers/postLike.controller");
const commentController = require("./src/controllers/comment.controller");

app.use("/users", userController);
app.use("/posts", postController);
app.use("/postLikes", postLikeController);
app.use("/comments", commentController);

const PORT = process.env.PORT || 3004;
app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    console.log(`🚀 @ http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
