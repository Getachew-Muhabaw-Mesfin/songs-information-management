const express = require("express");
const router = express.Router();
const {
  createSong,
  updateSong,
  getAllSongs,
  getSingleSong,
  deleteSong,
} = require("../controllers/songController");

router.post("/songs", createSong);
router.get("/songs", getAllSongs);
router.patch("/songs/:id", updateSong);
router.get("/songs/:id", getSingleSong);
router.delete("/songs/:id", deleteSong);

module.exports = router;
