const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./productRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

// basic root route just to check if server is running
app.get("/", (req, res) => {
  res.send("ShopSphere API is running");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
