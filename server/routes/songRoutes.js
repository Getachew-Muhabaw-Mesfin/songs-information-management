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
router.patch("/:id", updateSong);
router.get("/:id", getSingleSong);
router.delete("/:id", deleteSong);

module.exports = router;
