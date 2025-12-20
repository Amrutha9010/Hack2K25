import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");
import { summarizeText } from "../utils/nlpSummarizer.js";

export const summarizeReport = async (req, res) => {
  try {
    console.log("🚀 Starting Local Custom NLP Summarization...");
    
    if (!req.file) {
      console.log("❌ No file received");
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log("✅ File received:", req.file.path, req.file.mimetype);

    let extractedText = "";

    // 1. Extract Text
    if (req.file.mimetype === "application/pdf") {
      console.log("📄 Parsing PDF...");
      const dataBuffer = fs.readFileSync(req.file.path);
      const data = await pdf(dataBuffer);
      extractedText = data.text;
      console.log("✅ PDF parsed, length:", extractedText.length);
    } else {
      return res.status(400).json({ message: "Only PDF reports are supported right now." });
    }

    if (!extractedText || extractedText.trim().length === 0) {
      return res.status(400).json({ message: "Could not extract text from file" });
    }

    // 2. Custom NLP Summarization
    console.log("🧠 Generating summary locally...");
    
    // Summarize into ~7 key sentences
    const summary = summarizeText(extractedText, 7);

    if (!summary) {
       throw new Error("Failed to generate summary text.");
    }

    console.log("✅ Summary generated, length:", summary.length);

    // Cleanup
    try {
      fs.unlinkSync(req.file.path);
    } catch (e) {
      console.error("Warning: could not delete temp file", e);
    }

    res.json({ summary });

  } catch (error) {
    console.error("❌ General Error:", error);
    res.status(500).json({ message: "Failed to process report: " + error.message });
  }
};
