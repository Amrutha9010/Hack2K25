import dotenv from "dotenv";
dotenv.config(); // 🔥 VERY IMPORTANT

import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("❌ OPENAI_API_KEY is missing");
}

const openai = new OpenAI({
  apiKey
});

export const aiRemedy = async (req, res) => {
  try {
    const { symptom } = req.body;

    if (!symptom) {
      return res.status(400).json({ message: "Symptom is required" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Suggest an Ayurvedic home remedy for ${symptom}.
Include title, plant, part used, ingredients, preparation, dosage, and caution.`
        }
      ]
    });

    res.json({
      result: response.choices[0].message.content
    });
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ message: "AI suggestion failed" });
  }
};