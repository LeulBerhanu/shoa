const {
  createBlogService,
  getAllBlogsService,
  getSingleBlogsService,
  deleteBlogService,
  updateBlogService,
} = require("../services/blog");
const { validate } = require("../validation/validate");

const createBlogController = async (req, res) => {
  const errors = validate(req);
  if (errors.isEmpty()) return createBlogService(req, res);
  return res.status(400).json(errors);
};
const getAllBlogsController = async (req, res) => {
  return getAllBlogsService(req, res);
};
const getSingleBlogController = async (req, res) => {
  return getSingleBlogsService(req, res);
};
const deleteBlogController = async (req, res) => {
  return deleteBlogService(req, res);
};
const updateBlogController = async (req, res) => {
  const errors = validate(req);
  if (errors.isEmpty()) return updateBlogService(req, res);
  return res.status(400).json(errors);
};

module.exports = {
  createBlogController,
  getAllBlogsController,
  getSingleBlogController,
  deleteBlogController,
  updateBlogController,
};
