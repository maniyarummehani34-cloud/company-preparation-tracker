const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userName: String,
  companyName: String,
  completedSkills: [String],
  notes: String
});

module.exports = mongoose.model("Progress", progressSchema);
