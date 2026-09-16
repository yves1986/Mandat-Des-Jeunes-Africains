const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");
const { login, me } = require("../controllers/auth.controller");

const router = express.Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Adresse e-mail invalide."),
    body("password").notEmpty().withMessage("Mot de passe requis."),
  ],
  validate,
  login,
);

router.get("/me", authenticate, me);

module.exports = router;
