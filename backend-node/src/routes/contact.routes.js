const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {
  createContactMessage,
  listContactMessages,
  subscribeNewsletter,
} = require("../controllers/contact.controller");

const router = express.Router();

router.post(
  "/",
  [
    body("fullName").trim().notEmpty().withMessage("Le nom complet est requis."),
    body("email").isEmail().withMessage("Adresse e-mail invalide."),
    body("subject").trim().notEmpty().withMessage("Le sujet est requis."),
    body("message").trim().isLength({ min: 10 }).withMessage("Le message est trop court."),
  ],
  validate,
  createContactMessage,
);

router.get("/", listContactMessages);

router.post(
  "/newsletter",
  [body("email").isEmail().withMessage("Adresse e-mail invalide.")],
  validate,
  subscribeNewsletter,
);

module.exports = router;
