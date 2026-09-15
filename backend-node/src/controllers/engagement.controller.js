const Engagement = require("../models/Engagement");

async function createEngagement(req, res, next) {
  try {
    const { fullName, email, country, engagementType, motivation } = req.body;
    const engagement = await Engagement.create({
      fullName,
      email,
      country,
      engagementType,
      motivation,
    });

    res.status(201).json({
      message: "Merci pour votre engagement ! Nous revenons vers vous très prochainement.",
      id: engagement._id,
    });
  } catch (err) {
    next(err);
  }
}

async function listEngagements(req, res, next) {
  try {
    const engagements = await Engagement.find().sort({ createdAt: -1 }).limit(100);
    res.json({ data: engagements });
  } catch (err) {
    next(err);
  }
}

module.exports = { createEngagement, listEngagements };
