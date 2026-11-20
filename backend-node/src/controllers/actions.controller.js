const Action = require("../models/Action");

async function listActions(req, res, next) {
  try {
    const { category } = req.query;
    const filter = { published: true };
    if (category && category !== "Toutes") {
      filter.category = category;
    }

    const actions = await Action.find(filter).sort({ createdAt: -1 });
    res.json({ data: actions });
  } catch (err) {
    next(err);
  }
}

async function getActionBySlug(req, res, next) {
  try {
    const action = await Action.findOne({ slug: req.params.slug, published: true });
    if (!action) {
      return res.status(404).json({ message: "Action introuvable." });
    }
    res.json({ data: action });
  } catch (err) {
    next(err);
  }
}

async function createAction(req, res, next) {
  try {
    const action = await Action.create(req.body);
    res.status(201).json({ data: action });
  } catch (err) {
    next(err);
  }
}

module.exports = { listActions, getActionBySlug, createAction };
