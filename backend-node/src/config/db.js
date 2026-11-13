const mongoose = require("mongoose");

let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  if (connectionPromise) return connectionPromise;

  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mandat_jeunes_africains";
  mongoose.set("strictQuery", true);

  connectionPromise = mongoose
    .connect(uri)
    .then((conn) => {
      console.log("[db] Connected to MongoDB");
      return conn;
    })
    .catch((err) => {
      connectionPromise = null;
      console.error("[db] MongoDB connection error:", err.message);
      throw err;
    });

  return connectionPromise;
}

module.exports = connectDB;
