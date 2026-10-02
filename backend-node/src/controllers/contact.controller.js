const Contact = require("../models/Contact");
const NewsletterSubscriber = require("../models/NewsletterSubscriber");
const { toCsv } = require("../utils/csv");

async function createContactMessage(req, res, next) {
  try {
    const { fullName, email, subject, message } = req.body;
    const contact = await Contact.create({ fullName, email, subject, message });

    res.status(201).json({
      message: "Votre message a bien été reçu. Merci de nous avoir contactés.",
      id: contact._id,
    });
  } catch (err) {
    next(err);
  }
}

async function listContactMessages(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ data: contacts });
  } catch (err) {
    next(err);
  }
}

async function subscribeNewsletter(req, res, next) {
  try {
    const { email } = req.body;
    await NewsletterSubscriber.findOneAndUpdate(
      { email },
      { email },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    res.status(201).json({ message: "Inscription à la newsletter confirmée." });
  } catch (err) {
    next(err);
  }
}

async function exportContactsCsv(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const csv = toCsv(contacts, [
      { label: "Date", value: (c) => c.createdAt.toISOString() },
      { label: "Nom complet", value: (c) => c.fullName },
      { label: "Email", value: (c) => c.email },
      { label: "Sujet", value: (c) => c.subject },
      { label: "Message", value: (c) => c.message },
      { label: "Statut", value: (c) => c.status },
    ]);

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="contacts.csv"');
    res.send(csv);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createContactMessage,
  listContactMessages,
  subscribeNewsletter,
  exportContactsCsv,
};
