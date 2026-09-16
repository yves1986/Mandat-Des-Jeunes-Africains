const Engagement = require("../models/Engagement");
const { toCsv } = require("../utils/csv");

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

async function exportEngagementsCsv(req, res, next) {
  try {
    const engagements = await Engagement.find().sort({ createdAt: -1 });
    const csv = toCsv(engagements, [
      { label: "Date", value: (e) => e.createdAt.toISOString() },
      { label: "Nom complet", value: (e) => e.fullName },
      { label: "Email", value: (e) => e.email },
      { label: "Pays", value: (e) => e.country },
      { label: "Type d'engagement", value: (e) => e.engagementType },
      { label: "Motivation", value: (e) => e.motivation },
      { label: "Statut", value: (e) => e.status },
    ]);

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="engagements.csv"');
    res.send(csv);
  } catch (err) {
    next(err);
  }
}

module.exports = { createEngagement, listEngagements, exportEngagementsCsv };
