const express = require("express");
const {
  createUserController,
  getAllUserController,
} = require("../controllers/user");
const { createUserSchema } = require("../validation/validationSchema");
const { verifyRequestMiddleWare } = require("../validation/validate");
const router = express.Router();

router
  .route("/")
  .post(createUserSchema, createUserController)
  .get(verifyRequestMiddleWare, getAllUserController);

module.exports = router;
