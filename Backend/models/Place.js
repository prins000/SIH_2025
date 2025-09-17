import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  video: { type: String },
  bestTimeToVisit: { type: String },
  entryFee: { type: String },
  category: [{
    type: String,
    enum: [
      "Religious-Site",
      "Beaches",
      "Bird-Watching-Site",
      "Museums",
      "Weekend-Getaways",
      "Most-Popular-Places"
    ],
    required: true
  }]
}, { timestamps: true });

export default mongoose.model("Place", placeSchema);


