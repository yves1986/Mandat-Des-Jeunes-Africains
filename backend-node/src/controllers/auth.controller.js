const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const admin = await AdminUser.findOne({ email: email.toLowerCase() });
    if (!admin) {
      return res.status(401).json({ message: "Identifiants invalides." });
    }

    const valid = await admin.verifyPassword(password);
    if (!valid) {
      return res.status(401).json({ message: "Identifiants invalides." });
    }

    const token = jwt.sign(
      { sub: admin._id.toString(), email: admin.email, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "8h" },
    );

    res.json({
      token,
      admin: { id: admin._id, fullName: admin.fullName, email: admin.email },
    });
  } catch (err) {
    next(err);
  }
}

async function me(req, res, next) {
  try {
    const admin = await AdminUser.findById(req.admin.sub).select("-passwordHash");
    if (!admin) {
      return res.status(404).json({ message: "Compte introuvable." });
    }
    res.json({ data: admin });
  } catch (err) {
    next(err);
  }
}

module.exports = { login, me };
