const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  body: {
    type: String,
    trim: true,
  },
  readTime: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
