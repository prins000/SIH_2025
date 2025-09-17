import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Place from './models/Place.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Enable CORS
app.use(cors({
    origin: "http://localhost:5173", // frontend + seller frontend
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Backend is running");
});

// get all places related to category
app.get("/api/category/:category", async (req, res) => {
    const { category } = req.params;

    try {
        const places = await Place.find({ category });
        res.json(places);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// perticular place details
app.get("/api/places/:id", async (req, res) => {

  const { id } = req.params;

    try {
      const place = await Place.findById(id);
      if (!place) {
        return res.status(404).json({ error: "Place not found" });
      }

      res.json(place);
    } catch (error) {
      console.error("❌ Error fetching place details:", error);
      res.status(500).json({ error: "Internal server error" });
    }

  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});