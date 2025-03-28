const express = require("express");
const { db } = require("../firebase");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const predictions = await db.collection("disaster_predictions").get();
    let data = [];
    predictions.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
