require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`[server] Mandat des Jeunes Africains API listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("[server] Failed to start:", err.message);
    process.exit(1);
  }
}

start();

module.exports = app;
