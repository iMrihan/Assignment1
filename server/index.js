const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
require("dotenv").config();
app.use(cors());
const connectDB = require("./src/config/db");

const userController = require("./src/controllers/user.controller");
const postController = require("./src/controllers/post.controller");
const postLikeController = require("./src/controllers/postLike.controller");
const commentController = require("./src/controllers/comment.controller");

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/users", userController);
app.use("/posts", postController);
app.use("/postLikes", postLikeController);
app.use("/comments", commentController);

app.use((req, res, next) => {
  res.status(404).json({
    message: "bad request",
  });
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    console.log(`🚀 @ http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
