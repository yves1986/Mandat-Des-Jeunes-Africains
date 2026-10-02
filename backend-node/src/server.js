require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const contactRoutes = require("./routes/contact.routes");
const engagementRoutes = require("./routes/engagement.routes");
const actionsRoutes = require("./routes/actions.routes");
const authRoutes = require("./routes/auth.routes");
const statsRoutes = require("./routes/stats.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  }),
);
app.use(express.json({ limit: "1mb" }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", apiLimiter);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Trop de tentatives de connexion. Merci de réessayer plus tard." },
});
app.use("/api/auth/login", loginLimiter);

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "mandat-jeunes-africains-backend" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/engagement", engagementRoutes);
app.use("/api/actions", actionsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stats", statsRoutes);

app.use(notFound);
app.use(errorHandler);

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[server] Mandat des Jeunes Africains API listening on port ${PORT}`);
  });
}

start();

module.exports = app;
