const mongoose = require("mongoose");

const engagementSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    country: { type: String, required: true, trim: true },
    engagementType: {
      type: String,
      required: true,
      enum: [
        "Devenir membre",
        "Devenir ambassadeur national",
        "Faire un don",
        "Devenir partenaire",
      ],
    },
    motivation: { type: String, trim: true, default: "" },
    status: {
      type: String,
      enum: ["pending", "contacted", "onboarded"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Engagement", engagementSchema);
