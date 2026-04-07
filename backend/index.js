const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// MongoDB connection (will fix later with Docker)
// mongoose.connect("mongodb://localhost:27017/testdb");

// const DataSchema = new mongoose.Schema({
//   message: String,
// });

// const Data = mongoose.model("Data", DataSchema);

// GET data
// app.get("/api/data", async (req, res) => {
//   const data = await Data.find();
//   res.json(data);
// });

// ADD data
// app.get("/api/add", async (req, res) => {
//   await Data.create({ message: "Hello from Node API 🚀" });
//   res.send("Data Added");
// });

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));