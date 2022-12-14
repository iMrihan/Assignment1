const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();

const connectDB = require("./configs/db");

const userController = require("./controllers/user.controller");

const productController = require("./controllers/product.controller");
const reviewController = require("./controllers/review.controller");

app.use("/api/users", userController);
app.use("/api", productController);
app.use("/api/reviews", reviewController);
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
