import { useEffect, useState } from "react";
import axios from "axios";
import "./Remedies.css";

const categories = [
  { key: "cold and cough", title: "Cold & Cough", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop" },
  { key: "indigestion", title: "Indigestion", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-800&auto=format&fit=crop" },
  { key: "fever", title: "Fever", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop" },
  { key: "headache", title: "Headache", image: "https://images.unsplash.com/photo-1543453926-b8c8c8b8c8c8?w=800&auto=format&fit=crop" },
  { key: "skin", title: "Skin Problems", image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=800&auto=format&fit=crop" },
  { key: "immunity", title: "Immunity Boost", image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop" }
];

export default function Remedies() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [remedies, setRemedies] = useState([]);
  const [symptom, setSymptom] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRemedies = async (category) => {
    setSelectedCategory(category);
    const res = await axios.get(
      `http://localhost:5000/api/remedies?category=${category}`
    );
    setRemedies(res.data);
  };

  const getAISuggestion = async () => {
    if (!symptom) return;
    setLoading(true);
    setAiResult("");

    const res = await axios.post(
      "http://localhost:5000/api/ai/remedy",
      { symptom }
    );

    setAiResult(res.data.result);
    setLoading(false);
  };

  return (
    <div className="remedies-page">
      <h1 className="page-title">🌿 Home Remedies</h1>

      {/* CATEGORY CARDS */}
      {!selectedCategory && (
        <div className="category-grid">
          {categories.map((c) => (
            <div
              key={c.key}
              className="category-card"
              onClick={() => fetchRemedies(c.key)}
            >
              <img src={c.image} alt={c.title} />
              <h3>{c.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* REMEDY LIST */}
      {selectedCategory && (
        <>
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            ← Back
          </button>

          <h2 className="category-title">{selectedCategory}</h2>

          <div className="remedy-grid">
            {remedies.map((r) => (
              <div key={r._id} className="remedy-card">
                <h3>{r.title}</h3>
                <p><b>Plant:</b> {r.plant}</p>
                <p><b>Part Used:</b> {r.partUsed}</p>
                <p><b>Ingredients:</b> {r.ingredients.join(", ")}</p>
                <p><b>Preparation:</b> {r.preparation}</p>
                <p><b>Dosage:</b> {r.dosage}</p>
                <p className="caution">⚠ {r.caution}</p>
              </div>
            ))}
          </div>

          {/* AI SUGGESTION */}
          <div className="ai-box">
            <h3>🤖 Expert AI Suggestion</h3>

            <input
              type="text"
              placeholder="Enter your symptom (eg: dry cough)"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
            />

            <button onClick={getAISuggestion}>
              {loading ? "Analyzing..." : "Get AI Remedy"}
            </button>

            {aiResult && <pre className="ai-result">{aiResult}</pre>}
          </div>
        </>
      )}
    </div>
  );
}