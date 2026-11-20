function notFound(req, res, next) {
  res.status(404).json({ message: `Route introuvable: ${req.originalUrl}` });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error("[error]", err);

  if (err.code === 11000) {
    return res.status(409).json({ message: "Cette ressource existe déjà." });
  }

  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Erreur interne du serveur.",
  });
}

module.exports = { notFound, errorHandler };
