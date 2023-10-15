const Site = require("../Schema/SiteSchema");
const { uploadImage, deleteImage } = require("../cloudinary");

const createSiteService = async (req, res) => {
  try {
    const { image, title, readTime } = req.body;
    const result = await uploadImage(image);
    const { public_id, secure_url } = result;
    await Site.create({
      title: "title",
      location: "titile",
      asset: {
        url: secure_url,
        id: public_id,
      },
    });
    return res.status(200).json({ success: true, result });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to create site.",
      location: "",
      path: "",
      type: "",
    });
  }
};
const deleteSiteService = async (req, res) => {
  try {
    const { id } = req.params;
    const site = await Site.findById({ _id: id });
    if (!site) {
      return res
        .status(404)
        .json({ msg: "Site not found.", location: "", path: "", type: "" });
    }
    const { asset } = site;

    await deleteImage(asset.id);
    await Site.deleteOne({ _id: id });
    return res.status(204).json({ msg: "Site successfully deleted." });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to delete site.",
      location: "",
      path: "",
      type: "",
    });
  }
};
const updateSiteService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, location } = req.body;
    const site = await Site.findById({ _id: id });
    if (!site) {
      return res
        .status(404)
        .json({ msg: "Site not found.", location: "", path: "", type: "" });
    }
    const { asset } = site;

    await deleteImage(asset.id);
    const result = await uploadImage(image);
    const { public_id, secure_url } = result;
    const newSite = await Site.findOneAndUpdate(
      { _id: id },
      { title, location, asset: { id: public_id, url: secure_url } },
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Site successfully updated.", site: newSite });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to update site.",
      location: "",
      path: "",
      type: "",
    });
  }
};
const getAllSitesService = async (req, res) => {
  try {
    const sites = await Site.find({});
    return res.status(200).json({ sites });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to retrieve sites.",
      location: "",
      path: "",
      type: "",
    });
  }
};
const getSingleSiteService = async (req, res) => {
  try {
    const { id } = req.params;
    const site = await Site.findById({ _id: id });

    if (!site) {
      return res
        .status(404)
        .json({ location: "", path: "", msg: "Site not found.", type: "" });
    }
    return res.status(200).json({ site });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to retrieve sites.",
      location: "",
      path: "",
      type: "",
    });
  }
};

module.exports = {
  createSiteService,
  deleteSiteService,
  updateSiteService,
  getAllSitesService,
  getSingleSiteService,
};
