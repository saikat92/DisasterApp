const express = require("express");
const router = express.Router();
const disasterController = require("../controllers/disasterController"); // Ensure correct path

router.get("/", disasterController.getDisasterData);
router.post("/predict", disasterController.predictDisaster);

module.exports = router;
