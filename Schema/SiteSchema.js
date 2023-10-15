const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  asset: {
    url: { type: String, trim: true },
    id: {
      type: String,
      trim: true,
    },
  },
  location: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Site", SiteSchema);
