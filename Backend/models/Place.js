import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aboutThePlace: {
    type: String,
    required: true,
  },
  history: {
    type: String,
  },
  visitingHours: {
    type: String,
  },
  location: { type: String, required: true },
  images: [{ type: String }],
  bestTimeToVisit: { type: String },
  category: [{
    type: String,
    enum: [
      "Most-Popular-Places",
      "Waterfalls-Scenic-Spots",
      "Wildlife-National-Parks",
      "Hills-Mountain-Ranges",
      "Temples-Religious-Places",
      "Adventure-Outdoor-Activities",
      "Festivals-Cultural-Events",
      "Lakes-Dams",
      "Cuisine-Traditional-Food",
    ],
    required: true
  }],
  popularFor: [
    {
      type: String,
    },
  ],
},
  { timestamps: true });

export default mongoose.model("Place", placeSchema);


