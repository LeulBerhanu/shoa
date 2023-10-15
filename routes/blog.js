const express = require("express");
const router = express.Router();

const {
  createBlogSchema,
  updateBlogSchema,
} = require("../validation/validationSchema");
const {
  createBlogController,
  getAllBlogsController,
  getSingleBlogController,
  deleteBlogController,
  updateBlogController,
} = require("../controllers/blog");
const { verifyRequestMiddleWare } = require("../validation/validate");

router
  .route("/")
  .get(getAllBlogsController)
  .post(verifyRequestMiddleWare, createBlogSchema, createBlogController);
router
  .route("/:id")
  .get(getSingleBlogController)
  .delete(verifyRequestMiddleWare, deleteBlogController)
  .patch(verifyRequestMiddleWare, updateBlogSchema, updateBlogController);

module.exports = router;
