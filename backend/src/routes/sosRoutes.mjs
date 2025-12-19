import express from "express";
import { createSOS } from "../controllers/sosController.mjs";

const router = express.Router();

// Log all requests to this route
router.use((req, res, next) => {
  console.log(`📨 SOS Route hit: ${req.method} ${req.path}`);
  next();
});

router.post("/", createSOS);

export default router;
