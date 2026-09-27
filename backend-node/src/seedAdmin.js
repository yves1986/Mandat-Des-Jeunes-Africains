require("dotenv").config();

const connectDB = require("./config/db");
const AdminUser = require("./models/AdminUser");

async function seedAdmin() {
  const [, , argEmail, argPassword, argFullName] = process.argv;
  const email = argEmail || process.env.ADMIN_EMAIL;
  const password = argPassword || process.env.ADMIN_PASSWORD;
  const fullName = argFullName || "Administrateur MDJA";

  if (!email || !password) {
    console.error(
      "[seed:admin] Provide ADMIN_EMAIL and ADMIN_PASSWORD in your .env, or run: node src/seedAdmin.js <email> <password> [\"Full Name\"]",
    );
    process.exit(1);
  }

  await connectDB();

  const passwordHash = await AdminUser.hashPassword(password);

  await AdminUser.findOneAndUpdate(
    { email: email.toLowerCase() },
    { email: email.toLowerCase(), passwordHash, fullName },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  console.log(`[seed:admin] Admin account ready for ${email}.`);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("[seed:admin] Failed:", err);
  process.exit(1);
});
