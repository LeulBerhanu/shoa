const express = require("express");
const {
  getAllContactController,
  createContactController,
  getSingleContactController,
  deleteContactController,
} = require("../controllers/contact");
const { verifyRequestMiddleWare } = require("../validation/validate");
const { createContactSchema } = require("../validation/validationSchema");
const router = express.Router();

router
  .route("/")
  .get(verifyRequestMiddleWare, getAllContactController)
  .post(createContactSchema, createContactController);
router
  .route("/:id")
  .get(verifyRequestMiddleWare, getSingleContactController)
  .delete(verifyRequestMiddleWare, deleteContactController);

module.exports = router;
