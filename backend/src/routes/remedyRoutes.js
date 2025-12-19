import express from "express";
import { getRemedies } from "../controllers/remedyController.js";
import { aiRemedy } from "../controllers/aiController.js";

const router = express.Router();

router.get("/remedies", getRemedies);
router.post("/ai/remedy", aiRemedy);

export default router;