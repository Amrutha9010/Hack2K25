import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import sosRoutes from "./src/routes/sosRoutes.mjs";

dotenv.config();

const app = express();

/* ================= MIDDLEWARES ================= */
app.use(cors());
app.use(express.json());

/* ================= DATABASE ================= */
connectDB();

/* ================= TEST ROUTES ================= */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/sos/test", (req, res) => {
  console.log("Test SOS POST hit:", req.body);
  res.json({ message: "Test SOS POST route working!" });
});

/* ================= ROUTES ================= */
app.use("/api/sos", sosRoutes);
console.log("✅ SOS routes registered at /api/sos");

/* ================= 404 HANDLER ================= */
app.use((req, res) => {
  console.warn("❌ 404", req.method, req.originalUrl);
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5174;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

/* ================= SAFETY HANDLERS ================= */
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});
