const express = require("express");
const router = express.Router();
const songsStatisticController = require("../controllers/songsStatisticController");

router.get("/statistics", songsStatisticController.getOverallStatistics);

module.exports = router;
