const express = require("express");
const router = express.Router();
const {
  createSong,
  updateSong,
  getAllSongs,
  getSingleSong,
  deleteSong,
} = require("../controllers/songController");

router.post("/", createSong);
router.get("/", getAllSongs);
router.patch("/:_id", updateSong);
router.get("/:_id", getSingleSong);
router.delete("/:_id", deleteSong);

module.exports = router;
