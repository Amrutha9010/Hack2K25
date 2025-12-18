// backend/routes/auth.routes.js
import express from "express";

import {
  register,
  login,
  sendOtp,
  verifyOtp,
  resetPassword,
  protect,
} from "../controllers/auth.Controller.js"; // ✅ keep same casing

const router = express.Router();

/* ================= PUBLIC AUTH ROUTES ================= */
router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

/* ================= PROTECTED ROUTE (TEST) ================= */
router.get("/me", protect, (req, res) => {
  res.status(200).json({
    status: "success",
    user: req.user,
  });
});

export default router;
