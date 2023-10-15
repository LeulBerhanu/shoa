const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploadImage = async (image) => {
  const res = await cloudinary.uploader.upload(image, opts);
  return res;
};

const deleteImage = async (public_id) => {
  const res = await cloudinary.uploader.destroy(public_id);

  return res;
};

module.exports = { uploadImage, deleteImage };
