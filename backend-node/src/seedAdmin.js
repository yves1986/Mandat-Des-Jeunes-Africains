require("dotenv").config();

const connectDB = require("./config/db");
const AdminUser = require("./models/AdminUser");

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("[seed:admin] ADMIN_EMAIL and ADMIN_PASSWORD must be set in your .env file.");
    process.exit(1);
  }

  await connectDB();

  const passwordHash = await AdminUser.hashPassword(password);

  await AdminUser.findOneAndUpdate(
    { email: email.toLowerCase() },
    { email: email.toLowerCase(), passwordHash, fullName: "Administrateur MDJA" },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  console.log(`[seed:admin] Admin account ready for ${email}.`);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("[seed:admin] Failed:", err);
  process.exit(1);
});
