const express = require("express");
const router = express.Router();
const Progress = require("../models/UserProgress");

router.post("/", async (req, res) => {
  const progress = new Progress(req.body);
  await progress.save();
  res.json(progress);
});

router.get("/:username", async (req, res) => {
  const data = await Progress.find({ userName: req.params.username });
  res.json(data);
});

module.exports = router;
