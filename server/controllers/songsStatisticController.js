const Song = require("../model/song");

exports.getOverallStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const genres = ["Country", "Love", "Classical", "Reggae", "Jazz"];
    const totalGenres = genres.length;
    const songsInGenre = {};
    for (const genre of genres) {
      const count = await Song.countDocuments({ genre: genre });
      songsInGenre[genre] = count;
    }

    const songsPerArtist = await Song.aggregate([
      {
        $group: {
          _id: { $toLower: "$artist" },
          count: { $sum: 1 },
        },
      },
    ]);
    const totalArtists = songsPerArtist.length;

    const songsPerAlbum = await Song.aggregate([
      {
        $group: {
          _id: { $toLower: "$album" },
          count: { $sum: 1 },
        },
      },
    ]);
    const totalAlbums = songsPerAlbum.length;

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
