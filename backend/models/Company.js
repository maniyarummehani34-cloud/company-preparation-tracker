const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  skills: [String],
  roadmap: [String]
});

module.exports = mongoose.model("Company", companySchema);
