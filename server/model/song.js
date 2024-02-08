const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter title of song"],
    },
    artist: {
      type: String,
      required: [true, "Please Enter artist of song"],
    },
    album: {
      type: String,
      required: [true, "Please Enter album of song"],
    },
    genre: {
      type: String,
      required: [true, "Please Enter genre of song"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
