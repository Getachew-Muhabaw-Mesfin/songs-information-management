const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the title of the song"],
    },
    artist: {
      type: String,
      required: [true, "Please enter the artist of the song"],
    },
    album: {
      type: String,
      required: [true, "Please enter the album of the song"],
    },
    genre: {
      type: [String],
      enum: ["Country", "Love", "Classical", "Reggae", "Jazz"],
      required: [true, "Please select the genre of the song"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
