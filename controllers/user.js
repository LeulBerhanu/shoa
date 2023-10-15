const { createUserService, getAllUserService } = require("../services/user");
const { validate } = require("../validation/validate");

const createUserController = async (req, res) => {
  const errors = validate(req);
  if (errors.isEmpty()) return createUserService(req, res);
  return res.status(400).json(errors);
};
const getAllUserController = async (req, res) => {
  return getAllUserService(req, res);
};

module.exports = { createUserController, getAllUserController };
