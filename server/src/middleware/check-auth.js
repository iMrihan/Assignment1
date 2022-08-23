const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, "this is dummy text");
    const user = await User.find({ email: verify.email });

    if (user[0].userType == "admin") {
      next();
    } else {
      return res.status.json({
        msg: "not admin",
      });
    }
  } catch (error) {
    return res.status(401).json({
      msg: "invalid token",
    });
  }
};
