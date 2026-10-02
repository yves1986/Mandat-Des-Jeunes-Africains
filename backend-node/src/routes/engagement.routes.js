const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");
const {
  createEngagement,
  listEngagements,
  exportEngagementsCsv,
} = require("../controllers/engagement.controller");

const router = express.Router();

router.post(
  "/",
  [
    body("fullName").trim().notEmpty().withMessage("Le nom complet est requis."),
    body("email").isEmail().withMessage("Adresse e-mail invalide."),
    body("country").trim().notEmpty().withMessage("Le pays est requis."),
    body("engagementType")
      .isIn([
        "Devenir membre",
        "Devenir ambassadeur national",
        "Faire un don",
        "Devenir partenaire",
      ])
      .withMessage("Type d'engagement invalide."),
    body("motivation").optional().trim(),
  ],
  validate,
  createEngagement,
);

router.get("/export", authenticate, exportEngagementsCsv);
router.get("/", authenticate, listEngagements);

module.exports = router;
