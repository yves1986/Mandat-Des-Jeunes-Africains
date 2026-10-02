const express = require("express");
const authenticate = require("../middleware/authenticate");
const { getKpis } = require("../controllers/stats.controller");

const router = express.Router();

router.get("/kpis", authenticate, getKpis);

module.exports = router;
