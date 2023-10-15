const { validationResult } = require("express-validator");
const User = require("../Schema/UserSchema");
const jwt = require("jsonwebtoken");
const validate = (req) => {
  const errors = validationResult(req);
  return errors;
};

const verifyRequestMiddleWare = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({ msg: "please login!" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "please login!" });
    }

    const data = jwt.verify(token, process.env.SECRET_KEY);
    if (!data) {
      return res.status(401).json({ msg: "please login!" });
    }
    const { id } = data;
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(401).json({ msg: "please login" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ msg: "please login!" });
  }
};
module.exports = { validate, verifyRequestMiddleWare };
