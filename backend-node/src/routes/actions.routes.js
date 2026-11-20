const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {
  listActions,
  getActionBySlug,
  createAction,
} = require("../controllers/actions.controller");

const router = express.Router();

router.get("/", listActions);
router.get("/:slug", getActionBySlug);

router.post(
  "/",
  [
    body("title").trim().notEmpty(),
    body("slug").trim().notEmpty(),
    body("category").isIn(["Plaidoyer", "Formation", "Mobilisation", "Terrain"]),
    body("country").trim().notEmpty(),
    body("date").trim().notEmpty(),
    body("summary").trim().notEmpty(),
  ],
  validate,
  createAction,
);

module.exports = router;
