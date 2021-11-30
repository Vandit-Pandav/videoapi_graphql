const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  user_id: {
    type: String,
  },
  liked_video_id: {
    type: [String],
    default: [],
  },
});

const UserData = mongoose.model("userdatas", userData);
module.exports = UserData;
