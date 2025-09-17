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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});