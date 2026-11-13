const Contact = require("../models/Contact");
const Engagement = require("../models/Engagement");
const Action = require("../models/Action");

async function getKpis(req, res, next) {
  try {
    const [totalContacts, totalEngagements, totalActions] = await Promise.all([
      Contact.countDocuments(),
      Engagement.countDocuments(),
      Action.countDocuments({ published: true }),
    ]);

    const byCountry = await Engagement.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    const byType = await Engagement.aggregate([
      { $group: { _id: "$engagementType", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 11);
    twelveMonthsAgo.setDate(1);
    twelveMonthsAgo.setHours(0, 0, 0, 0);

    const monthlyEngagements = await Engagement.aggregate([
      { $match: { createdAt: { $gte: twelveMonthsAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      data: {
        totals: { totalContacts, totalEngagements, totalActions },
        engagementsByCountry: byCountry.map((row) => ({ country: row._id, count: row.count })),
        engagementsByType: byType.map((row) => ({ type: row._id, count: row.count })),
        monthlyEngagements: monthlyEngagements.map((row) => ({ month: row._id, count: row.count })),
      },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getKpis };
