const express = require("express");
const router = express.Router();

const {
  createSiteController,
  deleteSiteController,
  updateSiteController,
  getAllSiteController,
  getSingleSiteController,
} = require("../controllers/site");
const {
  createSiteSchema,
  updateSiteSchema,
} = require("../validation/validationSchema");
const { verifyRequestMiddleWare } = require("../validation/validate");

router
  .route("/")
  .post(verifyRequestMiddleWare, createSiteSchema, createSiteController)
  .get(getAllSiteController);
router
  .route("/:id")
  .delete(verifyRequestMiddleWare, deleteSiteController)
  .patch(verifyRequestMiddleWare, updateSiteSchema, updateSiteController)
  .get(getSingleSiteController);

module.exports = router;
