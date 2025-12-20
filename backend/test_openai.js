import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

async function testOpenAI() {
  console.log("🔑 Testing OpenAI API Key...");
  
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ ERROR: OPENAI_API_KEY is missing in .env");
    process.exit(1);
  }

  console.log("✅ API Key found (starts with):", process.env.OPENAI_API_KEY.substring(0, 5) + "...");

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    console.log("🤖 Sending test request to OpenAI...");
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Say 'Hello' if you can hear me." }],
    });
    console.log("✅ Success! Response:", completion.choices[0].message.content);
  } catch (error) {
    console.error("❌ OpenAI Request Failed:", error.message);
    if (error.code === 'insufficient_quota') {
        console.error("🚨 Account is out of credits.");
    } else if (error.code === 'invalid_api_key') {
        console.error("🚨 API Key is invalid.");
    }
  }
}

testOpenAI();
