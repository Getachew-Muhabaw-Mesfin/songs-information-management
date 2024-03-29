const Song = require("../model/song");

// Create a new song
const createSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    const newSong = await Song.create({ title, artist, album, genre });
    res.status(201).json({
      status: "success",
      song:newSong,
    });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

// Get all songs
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

// Get a single song by ID
const getSingleSong = async (req, res) => {
  try {
    const { _id } = req.params;
    const song = await Song.findById(_id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ status: "success", song });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a song by ID
const updateSong = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, artist, album, genre } = req.body;
    const updatedSong = await Song.findByIdAndUpdate(
      _id,
      { title, artist, album, genre },
      { new: true }
    );
    if (!updatedSong) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ status: "success", song: updatedSong});
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

// Delete a song by ID
const deleteSong = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedSong = await Song.findByIdAndDelete(_id);
    if (!deletedSong) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSong,
  updateSong,
  getAllSongs,
  getSingleSong,
  deleteSong,
};
