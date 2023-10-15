const { body } = require("express-validator");

const createBlogSchema = [
  body("title").trim().notEmpty(),
  body("body").trim().notEmpty(),
];

const updateBlogSchema = [
  body("title").optional().trim().notEmpty(),
  body("body").optional().trim().notEmpty(),
  body("readTime").optional().trim().notEmpty(),
];

const createSiteSchema = [
  body("title").trim().notEmpty(),
  body("image").trim().notEmpty(),
  body("readTime").trim().notEmpty(),
];

const updateSiteSchema = [
  body("title").optional().trim().notEmpty(),
  body("location").optional().trim().notEmpty(),
  body("image").optional().trim().notEmpty(),
];

const createContactSchema = [
  body("name").trim().notEmpty(),
  body("email").trim().notEmpty(),
  body("subject").trim().notEmpty(),
  body("message").trim().notEmpty(),
];

const createUserSchema = [
  body("username").trim().notEmpty(),
  body("password").trim().notEmpty(),
];

module.exports = {
  createBlogSchema,
  updateBlogSchema,
  createSiteSchema,
  updateSiteSchema,
  createContactSchema,
  createUserSchema,
};
