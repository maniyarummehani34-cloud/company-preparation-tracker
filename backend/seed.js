const mongoose = require('mongoose');
require('dotenv').config();

const CompanySchema = new mongoose.Schema({
  name: String,
  topics: [String]
});

const Company = mongoose.model('Company', CompanySchema);

const data = [
  { name: "Google", topics: ["DSA", "System Design", "OS", "DBMS", "React"] },
  { name: "Amazon", topics: ["DSA", "Leadership Principles", "Low Level Design"] },
  { name: "TCS", topics: ["Aptitude", "Coding", "Technical Interview"] }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Company.insertMany(data);
    console.log("Companies added successfully!");
    process.exit();
  })
  .catch(err => console.log(err));