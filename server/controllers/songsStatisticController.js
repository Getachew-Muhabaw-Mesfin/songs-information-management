const Song = require("../model/song");

exports.getOverallStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct("artist").count();
    const totalAlbums = await Song.distinct("album").count();
    const totalGenres = await Song.distinct("genre").count();

    const songsInGenre = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);

    const songsPerArtist = await Song.aggregate([
      { $group: { _id: "$artist", count: { $sum: 1 } } },
    ]);

    const songsPerAlbum = await Song.aggregate([
      { $group: { _id: "$album", count: { $sum: 1 } } },
    ]);

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsInGenre,
      songsPerArtist,
      songsPerAlbum,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
