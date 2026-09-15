const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Plaidoyer", "Formation", "Mobilisation", "Terrain"],
    },
    country: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Action", actionSchema);
