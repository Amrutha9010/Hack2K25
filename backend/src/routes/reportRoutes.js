import express from "express";
import multer from "multer";
import { summarizeReport } from "../controllers/reportController.js";

const router = express.Router();

// Multer setup for temporary file storage
const upload = multer({ dest: "uploads/" });

router.post("/summarize", upload.single("file"), summarizeReport);

export default router;
