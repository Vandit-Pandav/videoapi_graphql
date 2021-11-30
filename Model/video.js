const mongoose = require("mongoose");

const videoDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  total_like: {
    type: Number,
    default: 0,
  },
  charecter_Name: {
    type: Array,
    default: [],
  },
});

const VideoData = mongoose.model("videodatas", videoDataSchema);

module.exports = VideoData;
