import mongoose from "mongoose";
import dotenv from "dotenv";
import Remedy from "./src/models/Remedy.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

await Remedy.insertMany([
  {
    "category": "cold and cough",
    "title": "Turmeric Milk - Anti-inflammatory Remedy",
    "plant": "Turmeric",
    "partUsed": "Rhizome powder",
    "ingredients": [
      "1 cup warm milk",
      "½ tsp turmeric powder",
      "A pinch of black pepper",
      "Optional: jaggery or honey"
    ],
    "preparation": "Heat milk and mix in turmeric and black pepper. Stir well.",
    "dosage": "Once at night before bed.",
    "caution": "Avoid in cases of lactose intolerance or if prone to acidity."
  },
  {
    "category": "cold and cough",
    "title": "Mulethi Decoction - Sore Throat Relief",
    "plant": "Mulethi (Licorice)",
    "partUsed": "Root powder",
    "ingredients": [
      "1 tsp dried Mulethi powder",
      "1.5 cups water",
      "A few crushed black peppercorns"
    ],
    "preparation": "Boil all ingredients for 10 minutes. Strain and drink warm.",
    "dosage": "1–2 times daily, especially helpful for sore throat.",
    "caution": "Avoid if you have high blood pressure or pregnancy."
  },
  {
    "category": "cold and cough",
    "title": "Eucalyptus Steam - Congestion Relief",
    "plant": "Eucalyptus",
    "partUsed": "Essential oil",
    "ingredients": [
      "Hot water in a bowl",
      "2–3 drops eucalyptus oil or camphor"
    ],
    "preparation": "Inhale steam covering your head with a towel. Breathe deeply for 10 minutes.",
    "dosage": "Once daily, especially before sleep.",
    "caution": "Keep a safe distance from hot water. Not recommended for small children."
  },
  {
    "category": "cold and cough",
    "title": "Honey Cinnamon Mix - Dry Cough Remedy",
    "plant": "Cinnamon",
    "partUsed": "Bark powder",
    "ingredients": [
      "1 tsp raw honey",
      "¼ tsp cinnamon powder"
    ],
    "preparation": "Mix well and consume directly.",
    "dosage": "Twice a day (morning and night) to relieve dry cough.",
    "caution": "Avoid for children under 1 year. Ensure cinnamon is of good quality."
  },
  {
    "category": "cold and cough",
    "title": "Pepper-Honey-Ginger Mix - Congestion Relief",
    "plant": "Black Pepper and Ginger",
    "partUsed": "Fruit and Rhizome",
    "ingredients": [
      "¼ tsp black pepper powder",
      "1 tsp honey",
      "½ tsp ginger juice"
    ],
    "preparation": "Mix all together into a paste.",
    "usage": "Lick slowly 2–3 times a day.",
    "benefits": "Clears congestion, soothes throat, effective for dry cough.",
    "caution": "Use fresh ingredients. Avoid if experiencing acidity."
  },
  {
    "category": "cold and cough",
    "title": "Ajwain Steam - Nasal Decongestant",
    "plant": "Ajwain (Carom Seeds)",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tbsp ajwain seeds",
      "1 liter boiling water"
    ],
    "preparation": "Add ajwain to boiling water. Inhale steam covering your head with a towel.",
    "usage": "Do this for 5–7 minutes once or twice daily.",
    "benefits": "Opens nasal passages, relieves headache and congestion.",
    "caution": "Keep safe distance from steam to avoid burns. Not for children under 5."
  },
  {
    "category": "indigestion",
    "title": "Jeera Water - Digestive Aid",
    "plant": "Cumin",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp cumin seeds",
      "2 cups water"
    ],
    "preparation": "Boil cumin seeds in water for 5–7 minutes. Strain.",
    "usage": "Drink warm after meals, twice daily.",
    "benefits": "Improves digestion, relieves bloating.",
    "caution": "Avoid excessive intake during pregnancy."
  },
  {
    "category": "indigestion",
    "title": "Ajwain with Salt - Gas Relief",
    "plant": "Carom",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp ajwain",
      "A pinch of black salt"
    ],
    "preparation": "Roast ajwain lightly and mix with salt.",
    "usage": "Chew ½ tsp with warm water after meals.",
    "benefits": "Relieves gas, acidity, and cramps.",
    "caution": "Avoid during ulcers or if you have a sensitive stomach."
  },
  {
    "category": "indigestion",
    "title": "Hing Water - Flatulence Remedy",
    "plant": "Asafoetida",
    "partUsed": "Resin",
    "ingredients": [
      "1 pinch hing",
      "½ glass warm water"
    ],
    "preparation": "Dissolve hing in warm water.",
    "usage": "Drink once a day after a heavy meal.",
    "benefits": "Relieves gas, flatulence, and colic.",
    "caution": "Avoid if allergic to asafoetida."
  },
  {
    "category": "indigestion",
    "title": "Ginger-Lemon Juice - Digestive Stimulant",
    "plant": "Ginger",
    "partUsed": "Rhizome",
    "ingredients": [
      "½ tsp ginger juice",
      "½ tsp lemon juice",
      "Honey (optional)"
    ],
    "preparation": "Mix and consume.",
    "usage": "Take once or twice daily before meals.",
    "benefits": "Stimulates digestive enzymes.",
    "caution": "Avoid in case of ulcers or GERD."
  },
  {
    "category": "indigestion",
    "title": "Buttermilk with Rock Salt - Gut Coolant",
    "plant": "Cumin",
    "partUsed": "Seeds (roasted)",
    "ingredients": [
      "1 glass buttermilk",
      "Pinch of rock salt",
      "Roasted cumin powder"
    ],
    "preparation": "Mix all ingredients and stir well.",
    "usage": "Drink after lunch.",
    "benefits": "Cools the gut, promotes digestion.",
    "caution": "Avoid if lactose intolerant."
  },
  {
    "category": "indigestion",
    "title": "Triphala Powder - Digestive Detox",
    "plant": "Triphala (Amla, Haritaki, Bibhitaki)",
    "partUsed": "Fruit powder blend",
    "ingredients": [
      "1 tsp Triphala powder",
      "Warm water"
    ],
    "preparation": "Mix powder in water and drink at bedtime.",
    "usage": "Daily or 3–4 times a week.",
    "benefits": "Aids digestion, detoxifies, and prevents constipation.",
    "caution": "Avoid long-term use without supervision."
  },
  {
    "category": "indigestion",
    "title": "Fennel Seeds - Bloating Relief",
    "plant": "Fennel",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp fennel seeds"
    ],
    "preparation": "Dry roast and chew after meals.",
    "usage": "After lunch or dinner.",
    "benefits": "Relieves bloating, improves digestion.",
    "caution": "Safe, but don't overuse."
  },
  {
    "category": "indigestion",
    "title": "Lemon Honey Water - Digestive Cleanser",
    "plant": "Lemon",
    "partUsed": "Fruit juice",
    "ingredients": [
      "Juice of ½ lemon",
      "1 tsp honey",
      "1 glass warm water"
    ],
    "preparation": "Mix and stir.",
    "usage": "Drink on an empty stomach.",
    "benefits": "Balances pH, cleanses digestive tract.",
    "caution": "Avoid if prone to acidity."
  },
  {
    "category": "indigestion",
    "title": "Mint Leaf Juice - Stomach Soother",
    "plant": "Mint (Pudina)",
    "partUsed": "Leaves",
    "ingredients": [
      "Fresh mint leaves",
      "Water",
      "Pinch of black salt"
    ],
    "preparation": "Crush mint, extract juice, mix with water and salt.",
    "usage": "Drink once daily after meals.",
    "benefits": "Reduces indigestion, nausea, and stomach discomfort.",
    "caution": "Use fresh leaves only."
  },
  {
    "category": "indigestion",
    "title": "Coriander Seed Tea - Acidity Relief",
    "plant": "Coriander",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp coriander seeds",
      "2 cups water"
    ],
    "preparation": "Boil seeds for 10 minutes, strain.",
    "usage": "Drink twice daily.",
    "benefits": "Improves appetite, reduces acidity.",
    "caution": "Mild and safe for regular use."
  },
  {
    "category": "menstrual pain",
    "title": "Ajwain Water - Cramp Relief",
    "plant": "Carom",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp ajwain seeds",
      "2 cups water"
    ],
    "preparation": "Boil the seeds in water for 5–7 minutes. Strain.",
    "usage": "Drink warm, twice daily during menstruation.",
    "benefits": "Relieves cramps, aids digestion, and reduces bloating.",
    "caution": "Avoid excessive intake."
  },
  {
    "category": "menstrual pain",
    "title": "Cinnamon Tea - Uterine Relaxant",
    "plant": "Cinnamon",
    "partUsed": "Bark",
    "ingredients": [
      "1 small cinnamon stick or ½ tsp powder",
      "1½ cups water",
      "Honey (optional)"
    ],
    "preparation": "Boil cinnamon in water for 10 mins. Add honey if needed.",
    "usage": "Drink 1–2 times a day during your period.",
    "benefits": "Anti-inflammatory and antispasmodic—eases uterine contractions.",
    "caution": "Avoid if on blood-thinning medications."
  },
  {
    "category": "menstrual pain",
    "title": "Sesame Seed Water - Natural Painkiller",
    "plant": "Sesame",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tbsp sesame seeds",
      "1 glass water"
    ],
    "preparation": "Soak overnight or boil seeds in water and strain.",
    "usage": "Drink once daily during painful days.",
    "benefits": "Reduces pain due to magnesium and calcium content.",
    "caution": "May generate heat; avoid excessive use in summer."
  },
  {
    "category": "menstrual pain",
    "title": "Castor Oil Massage - Muscle Relaxant",
    "plant": "Castor",
    "partUsed": "Oil",
    "ingredients": [
      "1–2 tsp warm castor oil"
    ],
    "usage": "Massage gently on lower abdomen before sleep.",
    "benefits": "Improves blood flow, reduces muscle tension and spasms.",
    "caution": "For external use only. Avoid if you have skin allergies."
  },
  {
    "category": "menstrual pain",
    "title": "Fenugreek Tea - Hormone Balancer",
    "plant": "Fenugreek",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp fenugreek seeds",
      "2 cups water"
    ],
    "preparation": "Boil seeds in water for 10 mins. Strain.",
    "usage": "Drink once or twice daily during menstruation.",
    "benefits": "Eases pain, balances hormones, and reduces water retention.",
    "caution": "Avoid during pregnancy."
  },
  {
    "category": "menstrual pain",
    "title": "Ginger Tea - Anti-inflammatory Relief",
    "plant": "Ginger",
    "partUsed": "Rhizome",
    "ingredients": [
      "1-inch piece of fresh ginger",
      "1½ cups water",
      "Honey (optional)"
    ],
    "preparation": "Crush ginger, boil in water for 5–7 mins. Strain and add honey.",
    "usage": "Drink twice daily during periods.",
    "benefits": "Natural anti-inflammatory; helps reduce uterine pain and fatigue.",
    "caution": "Avoid if prone to acidity or ulcers."
  },
  {
    "category": "menstrual pain",
    "title": "Aloe Vera Honey Mix - Flow Regulator",
    "plant": "Aloe Vera",
    "partUsed": "Gel",
    "ingredients": [
      "2 tbsp fresh aloe vera gel",
      "1 tsp honey"
    ],
    "preparation": "Mix aloe gel with honey well.",
    "usage": "Take this mixture every morning on an empty stomach during periods.",
    "benefits": "Reduces cramps and regulates menstrual flow.",
    "caution": "Avoid during pregnancy or diarrhea."
  },
  {
    "category": "menstrual pain",
    "title": "Ashoka Bark Decoction - Uterine Tonic",
    "plant": "Ashoka",
    "partUsed": "Bark",
    "ingredients": [
      "2 tsp Ashoka bark powder",
      "2 cups water"
    ],
    "preparation": "Boil powder in water until reduced to 1 cup. Strain.",
    "usage": "Drink warm once daily from 3 days before menstruation.",
    "benefits": "Strengthens the uterus and balances hormones.",
    "caution": "Use under Ayurvedic supervision if pregnant or on other meds."
  },
  {
    "category": "menstrual pain",
    "title": "Turmeric Milk - Natural Painkiller",
    "plant": "Turmeric",
    "partUsed": "Rhizome",
    "ingredients": [
      "1 cup milk",
      "½ tsp turmeric powder",
      "A pinch of black pepper"
    ],
    "preparation": "Warm the milk, mix turmeric and pepper. Stir well.",
    "usage": "Drink warm before bed during menstruation.",
    "benefits": "Reduces inflammation and acts as a natural painkiller.",
    "caution": "Avoid if lactose intolerant."
  },
  {
    "category": "menstrual pain",
    "title": "Saffron Milk - Nervous System Calmer",
    "plant": "Saffron",
    "partUsed": "Stigmas",
    "ingredients": [
      "3–4 strands of saffron",
      "1 cup warm milk"
    ],
    "preparation": "Soak saffron in warm milk for 10 minutes.",
    "usage": "Drink once daily during painful periods.",
    "benefits": "Calms the nervous system and reduces pain and mood swings.",
    "caution": "Do not overdose—excessive saffron may cause side effects."
  },
  {
    "category": "constipation",
    "title": "Triphala Powder - Natural Colon Cleanser",
    "plant": "Triphala (Amla, Haritaki, Bibhitaki)",
    "partUsed": "Fruit powder blend",
    "ingredients": [
      "1 tsp Triphala powder",
      "Warm water"
    ],
    "preparation": "Mix in water and drink before bedtime.",
    "benefits": "Natural colon cleanser; improves digestion and bowel movement.",
    "caution": "Use moderately; can cause dependency over time."
  },
  {
    "category": "constipation",
    "title": "Castor Oil - Intestinal Lubricant",
    "plant": "Castor",
    "partUsed": "Oil",
    "ingredients": [
      "1–2 tsp castor oil",
      "Warm milk"
    ],
    "preparation": "Mix oil in milk and drink at night.",
    "benefits": "Lubricates intestines and relieves chronic constipation.",
    "caution": "Not for pregnant women or children under 5."
  },
  {
    "category": "constipation",
    "title": "Flax Seeds - Fiber Boost",
    "plant": "Flax",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tbsp flax seeds",
      "Warm water"
    ],
    "preparation": "Soak overnight; drink next morning or eat seeds with water.",
    "benefits": "Rich in fiber and omega-3; eases stool passage.",
    "caution": "Drink plenty of water."
  },
  {
    "category": "constipation",
    "title": "Ghee with Hot Water - Digestive Lubricant",
    "plant": "Cow",
    "partUsed": "Clarified butter",
    "ingredients": [
      "1 tsp desi ghee",
      "1 cup hot water"
    ],
    "preparation": "Mix and drink before sleeping.",
    "benefits": "Lubricates digestive tract and supports detox.",
    "caution": "Avoid if you have fatty liver or high cholesterol."
  },
  {
    "category": "constipation",
    "title": "Isabgol - Stool Softener",
    "plant": "Psyllium",
    "partUsed": "Husk",
    "ingredients": [
      "1–2 tsp isabgol",
      "Warm water or milk"
    ],
    "preparation": "Mix and drink at night.",
    "benefits": "Bulks up stool and promotes easy passage.",
    "caution": "Drink adequate water to avoid blockage."
  },
  {
    "category": "constipation",
    "title": "Raisin Water - Gentle Laxative",
    "plant": "Black Raisin",
    "partUsed": "Dried fruit",
    "ingredients": [
      "10–15 black raisins",
      "1 cup water"
    ],
    "preparation": "Soak overnight and drink next morning.",
    "benefits": "Natural laxative; good for children and elders.",
    "caution": "Avoid sugary versions for diabetic patients."
  },
  {
    "category": "constipation",
    "title": "Bael Fruit - Bowel Regulator",
    "plant": "Wood Apple",
    "partUsed": "Pulp",
    "ingredients": [
      "Bael pulp",
      "Jaggery (optional)"
    ],
    "preparation": "Mix and eat as pulp or drink as juice.",
    "benefits": "Soothes stomach lining; eases bowel movement.",
    "caution": "Use ripe bael only; unripe may worsen constipation."
  },
  {
    "category": "constipation",
    "title": "Warm Lemon Water - Digestive Stimulant",
    "plant": "Lemon",
    "partUsed": "Juice",
    "ingredients": [
      "Juice of ½ lemon",
      "1 cup warm water"
    ],
    "preparation": "Drink first thing in morning.",
    "benefits": "Stimulates digestion and bowel function.",
    "caution": "May aggravate acidity in some."
  },
  {
    "category": "constipation",
    "title": "Aloe Vera Juice - Mild Laxative",
    "plant": "Aloe Vera",
    "partUsed": "Juice",
    "ingredients": [
      "1 tbsp aloe vera juice",
      "Warm water"
    ],
    "preparation": "Mix and drink on empty stomach.",
    "benefits": "Has mild laxative properties; cools digestive tract.",
    "caution": "Avoid during pregnancy."
  },
  {
    "category": "constipation",
    "title": "Anjeer in Milk - Fiber-Rich Remedy",
    "plant": "Fig",
    "partUsed": "Dried fruit",
    "ingredients": [
      "2–3 dried figs",
      "Warm milk"
    ],
    "preparation": "Soak figs overnight in milk and eat in the morning.",
    "benefits": "High fiber content promotes soft bowel movement.",
    "caution": "Avoid if diabetic without monitoring sugar intake."
  },
  {
    "category": "acne",
    "title": "Neem Paste - Acne & Pimples Treatment",
    "plant": "Neem",
    "partUsed": "Leaves",
    "ingredients": [
      "10–12 fresh neem leaves",
      "1–2 tsp water (if needed)"
    ],
    "preparation": "Crush fresh neem leaves into a fine paste. Add water if needed for consistency. Apply to affected area.",
    "dosage": "Once daily",
    "caution": "Avoid using on broken skin or near eyes."
  },
  {
    "category": "acne",
    "title": "Multani Mitti - Oily Skin & Acne Solution",
    "plant": "Clay",
    "partUsed": "Earth",
    "ingredients": [
      "2 tbsp Multani Mitti (Fuller’s Earth)",
      "1 tbsp rose water or cucumber juice"
    ],
    "preparation": "Mix ingredients to form a smooth paste. Apply as a mask and let dry for 15–20 minutes.",
    "dosage": "Once or twice a week",
    "caution": "Not suitable for dry skin."
  },
  {
    "category": "acne",
    "title": "Kumkumadi Tailam - Dark Spot Corrector",
    "plant": "Saffron + 25 herbs",
    "partUsed": "Oil",
    "ingredients": [
      "3–4 drops Kumkumadi Tailam"
    ],
    "preparation": "Apply a few drops at night and massage gently into dark spots.",
    "dosage": "Nightly application",
    "caution": "Use minimal amount; patch test first."
  },
  {
    "category": "acne",
    "title": "Coconut Oil & Camphor Balm - Skin Healing",
    "plant": "Coconut & Camphor",
    "partUsed": "Oil & Resin",
    "ingredients": [
      "2 tbsp coconut oil",
      "½ tsp crushed camphor"
    ],
    "preparation": "Mix coconut oil and camphor until well blended. Apply to affected areas.",
    "dosage": "Nightly before bed",
    "caution": "Store in a cool place; avoid on open wounds."
  },
  {
    "category": "skin",
    "title": "Turmeric & Milk Paste - Glowing Skin",
    "plant": "Turmeric",
    "partUsed": "Root",
    "ingredients": [
      "1 tsp turmeric powder",
      "1 tbsp raw milk"
    ],
    "preparation": "Mix turmeric and milk to form a paste. Apply and wash after 15 minutes.",
    "dosage": "2–3 times a week",
    "caution": "May stain skin yellow temporarily."
  },
  {
    "category": "skin",
    "title": "Aloe Vera Gel - Sunburn Relief",
    "plant": "Aloe Vera",
    "partUsed": "Gel",
    "ingredients": [
      "Fresh aloe vera leaf (gel extracted)"
    ],
    "preparation": "Apply fresh gel directly to sunburned or irritated skin.",
    "dosage": "Daily",
    "caution": "Patch test on sensitive skin."
  },
  {
    "category": "skin",
    "title": "Sandalwood Paste - Pigmentation Treatment",
    "plant": "Sandalwood",
    "partUsed": "Wood",
    "ingredients": [
      "1 tbsp sandalwood powder",
      "1 tbsp rose water"
    ],
    "preparation": "Mix sandalwood and rose water into a paste. Apply as a face mask.",
    "dosage": "Twice a week",
    "caution": "Use genuine sandalwood to avoid irritation."
  },
  {
    "category": "skin",
    "title": "Manjistha Powder - Skin Brightening",
    "plant": "Manjistha (Rubia cordifolia)",
    "partUsed": "Root",
    "ingredients": [
      "1 tbsp Manjistha powder",
      "1 tsp honey or milk"
    ],
    "preparation": "Mix with honey/milk to form a paste. Apply as a face pack.",
    "dosage": "Weekly",
    "caution": "Avoid in pregnancy."
  },
  {
    "category": "skin",
    "title": "Tulsi & Honey Pack - Skin Healing",
    "plant": "Tulsi (Holy Basil)",
    "partUsed": "Leaves",
    "ingredients": [
      "5–6 fresh tulsi leaves",
      "1 tsp honey"
    ],
    "preparation": "Crush tulsi leaves, mix with honey, and apply to skin.",
    "dosage": "2–3 times a week",
    "caution": "Not for very sensitive skin. Discontinue if irritation occurs."
  },
  {
    "category": "skin",
    "title": "Banana & Honey Foot Pack - Moisturization",
    "plant": "Banana & Honey",
    "partUsed": "Fruit & Nectar",
    "ingredients": [
      "1 ripe banana",
      "1 tbsp honey"
    ],
    "preparation": "Mash banana, mix with honey, apply to heels. Leave for 20–25 minutes.",
    "dosage": "Daily or every alternate day",
    "caution": "Use ripe banana; avoid walking while pack is on."
  },
  {
    "category": "DarkCircles",
    "title": "Potato Juice - Pigmentation & Under-Eye Treatment",
    "plant": "Potato",
    "partUsed": "Tuber",
    "ingredients": [
      "1 small potato (grated)"
    ],
    "preparation": "Grate and squeeze juice. Apply on dark circles with cotton.",
    "dosage": "Alternate days",
    "caution": "Discontinue if irritation occurs."
  },
  {
    "category": "DarkCircles",
    "title": "Cucumber Rose Toner - Soothing Eye Treatment",
    "plant": "Cucumber & Rose",
    "partUsed": "Fruit & Flower",
    "ingredients": [
      "2 tbsp cucumber juice",
      "2 tbsp rose water"
    ],
    "preparation": "Mix equal parts cucumber juice and rose water. Apply with cotton.",
    "dosage": "Twice a day",
    "caution": "Store fresh; avoid preservatives."
  },
  {
    "category": "hair fall",
    "title": "Amla Oil Massage - Hair Strengthening",
    "plant": "Amla (Indian Gooseberry)",
    "partUsed": "Fruit",
    "ingredients": [
      "2–3 tbsp amla oil"
    ],
    "preparation": "Warm oil slightly and massage into scalp. Leave for 30–60 minutes.",
    "dosage": "2–3 times a week",
    "caution": "Use mild shampoo to rinse thoroughly."
  },
  {
    "category": "hair fall",
    "title": "Bhringraj Oil - Hair Regrowth",
    "plant": "Bhringraj",
    "partUsed": "Leaves",
    "ingredients": [
      "2–3 tbsp Bhringraj-infused coconut oil"
    ],
    "preparation": "Massage oil into scalp. Leave for at least 30 minutes.",
    "dosage": "3 times a week",
    "caution": "Patch test for allergies."
  },
  {
    "category": "hair fall",
    "title": "Fenugreek Paste - Dandruff Control",
    "plant": "Fenugreek",
    "partUsed": "Seeds",
    "ingredients": [
      "2 tbsp fenugreek seeds",
      "Water (for soaking)"
    ],
    "preparation": "Soak seeds overnight, grind into paste, and apply on scalp.",
    "dosage": "Once a week",
    "caution": "Rinse thoroughly; avoid leaving overnight."
  },
  {
    "category": "hair fall",
    "title": "Hibiscus Hair Mask - Growth Stimulant",
    "plant": "Hibiscus",
    "partUsed": "Flowers & Leaves",
    "ingredients": [
      "5–6 hibiscus flowers",
      "5–6 hibiscus leaves",
      "Water (as needed)"
    ],
    "preparation": "Blend into a paste and apply to scalp/hair. Leave for 30 minutes.",
    "dosage": "Weekly",
    "caution": "Use fresh ingredients."
  },
  {
    "category": "hair fall",
    "title": "Curry Leaves Oil - Hair Strengthener",
    "plant": "Curry Leaves",
    "partUsed": "Leaves",
    "ingredients": [
      "10–12 curry leaves",
      "½ cup coconut oil"
    ],
    "preparation": "Boil leaves in oil, cool, and strain. Massage into scalp.",
    "dosage": "2–3 times per week",
    "caution": "Store in a cool place."
  },
  {
    "category": "hair fall",
    "title": "Aloe Vera Gel - Scalp Health",
    "plant": "Aloe Vera",
    "partUsed": "Gel",
    "ingredients": [
      "Fresh aloe vera gel (extracted from leaf)"
    ],
    "preparation": "Apply gel directly to scalp. Leave for 30 minutes.",
    "dosage": "Twice a week",
    "caution": "Patch test recommended."
  },
  {
    "category": "hair fall",
    "title": "Brahmi Hair Pack - Scalp Relaxation",
    "plant": "Brahmi",
    "partUsed": "Leaves",
    "ingredients": [
      "2 tbsp Brahmi powder",
      "Water or curd (as needed)"
    ],
    "preparation": "Mix Brahmi powder with water/curd to form a paste. Apply to scalp.",
    "dosage": "Weekly",
    "caution": "Avoid if allergic to herbs."
  },
  {
    "category": "hair fall",
    "title": "Onion Juice - Hair Regrowth",
    "plant": "Onion",
    "partUsed": "Bulb",
    "ingredients": [
      "1 medium onion (juiced)"
    ],
    "preparation": "Apply juice to scalp for 20–30 minutes. Rinse thoroughly.",
    "dosage": "Twice a week",
    "caution": "Strong smell; rinse thoroughly."
  },
  {
    "category": "hair fall",
    "title": "Triphala Hair Wash - Scalp Detox",
    "plant": "Triphala (Amalaki, Bibhitaki, Haritaki)",
    "partUsed": "Fruit powders",
    "ingredients": [
      "1 tbsp Triphala powder",
      "1 cup water"
    ],
    "preparation": "Boil Triphala in water, cool, and use as a final hair rinse.",
    "dosage": "Weekly",
    "caution": "Use fresh decoction."
  },
  {
    "category": "hair fall",
    "title": "Neem Water Rinse - Scalp Purifier",
    "plant": "Neem",
    "partUsed": "Leaves",
    "ingredients": [
      "10–12 neem leaves",
      "2 cups water"
    ],
    "preparation": "Boil neem leaves in water, cool, and use as a final rinse.",
    "dosage": "After every hair wash",
    "caution": "Not for use on extremely dry scalp."
  },
  {
    "category": "weightgain",
    "title": "Ashwagandha Milk Shake - Mass Booster",
    "plant": "Ashwagandha (Withania somnifera)",
    "partUsed": "Root powder",
    "ingredients": [
      "1 tsp ashwagandha powder",
      "1 glass warm milk",
      "1 tsp jaggery or honey"
    ],
    "preparation": "Mix ashwagandha powder and sweetener in warm milk. Stir well.",
    "dosage": "Twice daily – morning and night",
    "caution": "Avoid if you have high blood pressure or thyroid issues."
  },
  {
    "category": "weightgain",
    "title": "Shatavari Ghee - Hormone Balancer",
    "plant": "Shatavari (Asparagus racemosus)",
    "partUsed": "Root powder",
    "ingredients": [
      "1 tsp Shatavari powder",
      "1 tsp desi ghee"
    ],
    "preparation": "Mix Shatavari powder with ghee until well combined.",
    "dosage": "Once daily before lunch",
    "caution": "Avoid in case of excessive mucous or cold symptoms."
  },
  {
    "category": "weightgain",
    "title": "Dates & Almond Paste - Energy Booster",
    "plant": "Dates & Almonds",
    "partUsed": "Fruits & Nuts",
    "ingredients": [
      "4 almonds (soaked overnight)",
      "2 dates (soaked overnight)",
      "1/2 cup milk"
    ],
    "preparation": "Grind soaked almonds and dates into a paste. Mix with milk.",
    "dosage": "Daily morning on empty stomach",
    "caution": "Avoid during extreme heat or fever."
  },
  {
    "category": "weightgain",
    "title": "Chyawanprash - Vitality Tonic",
    "plant": "Multiple herbs including Amla",
    "partUsed": "Herbal mixture",
    "ingredients": [
      "1–2 tsp Chyawanprash",
      "1/2 cup warm milk (optional)"
    ],
    "preparation": "Consume directly or mix with warm milk.",
    "dosage": "1–2 tsp with warm milk in the morning",
    "caution": "Use a good brand; avoid excess as it can cause heaviness."
  },
  {
    "category": "weightgain",
    "title": "Cow Ghee with Black Sesame - Nutrition Enhancer",
    "plant": "Sesame",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tbsp black sesame seeds",
      "1 tsp cow ghee"
    ],
    "preparation": "Dry roast sesame seeds, crush, and mix with ghee.",
    "dosage": "1 tsp daily after meals",
    "caution": "Avoid if cholesterol is high or digestion is weak."
  },
  {
    "category": "weightloss",
    "title": "Lemon-Honey Water - Metabolism Booster",
    "plant": "Lemon & Honey",
    "partUsed": "Juice",
    "ingredients": [
      "Juice of 1/2 lemon",
      "1 tsp honey",
      "1 cup warm water"
    ],
    "preparation": "Mix lemon juice and honey in warm water. Stir well.",
    "dosage": "Early morning on empty stomach",
    "caution": "Avoid if you have ulcers or acidity."
  },
  {
    "category": "weightloss",
    "title": "Triphala Powder - Digestive Cleanser",
    "plant": "Amalaki, Haritaki, Bibhitaki",
    "partUsed": "Fruits",
    "ingredients": [
      "1 tsp Triphala powder",
      "1 cup warm water"
    ],
    "preparation": "Mix Triphala powder in warm water and drink.",
    "dosage": "Once daily before bedtime",
    "caution": "Avoid in case of diarrhea or dehydration."
  },
  {
    "category": "weightloss",
    "title": "Ginger-Tulsi Tea - Fat Burning Drink",
    "plant": "Ginger & Tulsi",
    "partUsed": "Root and leaves",
    "ingredients": [
      "1-inch ginger (crushed)",
      "5–6 fresh tulsi leaves",
      "1.5 cups water"
    ],
    "preparation": "Boil ginger and tulsi in water for 5 minutes. Strain and drink.",
    "dosage": "Twice a day before meals",
    "caution": "Avoid if you feel acidity or burning sensation."
  },
  {
    "category": "weightloss",
    "title": "Garlic Clove - Cholesterol Reducer",
    "plant": "Garlic",
    "partUsed": "Clove",
    "ingredients": [
      "1 raw garlic clove"
    ],
    "preparation": "Chew the garlic clove and drink warm water afterward.",
    "dosage": "Morning on empty stomach",
    "caution": "Avoid in case of gastritis or acidity."
  },
  {
    "category": "weightloss",
    "title": "Flaxseed Powder - Fiber Supplement",
    "plant": "Flax",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tbsp flaxseeds",
      "1 cup water or buttermilk"
    ],
    "preparation": "Dry roast flaxseeds, grind into powder, and mix with liquid.",
    "dosage": "1 tsp in water/buttermilk before meals",
    "caution": "Drink plenty of water to avoid constipation."
  },
  {
    "category": "Diabetes",
    "title": "Bitter Gourd Juice - Blood Sugar Regulator",
    "plant": "Bitter Gourd",
    "partUsed": "Fruit",
    "ingredients": [
      "1–2 bitter gourds (karela)"
    ],
    "preparation": "Extract fresh juice using a juicer or grater.",
    "dosage": "½ cup on empty stomach daily",
    "caution": "May cause low sugar if taken with medications."
  },
  {
    "category": "Diabetes",
    "title": "Gudmar Leaves Tea - Sugar Destroyer",
    "plant": "Gudmar",
    "partUsed": "Leaves",
    "ingredients": [
      "1 tsp dried Gudmar leaves",
      "1 cup water"
    ],
    "preparation": "Boil leaves in water for 5 minutes. Strain and drink.",
    "dosage": "Once or twice daily",
    "caution": "Avoid during pregnancy."
  },
  {
    "category": "Diabetes",
    "title": "Fenugreek Seeds - Fiber Supplement",
    "plant": "Fenugreek",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp fenugreek seeds",
      "1 cup water (for soaking)"
    ],
    "preparation": "Soak seeds overnight. Chew in the morning with water.",
    "dosage": "Daily before breakfast",
    "caution": "Monitor sugar levels regularly."
  },
  {
    "category": "Diabetes",
    "title": "Neem Leaf Juice - Blood Purifier",
    "plant": "Neem",
    "partUsed": "Leaves",
    "ingredients": [
      "10–12 fresh neem leaves",
      "2 tbsp water (for extraction)"
    ],
    "preparation": "Crush leaves and strain the juice.",
    "dosage": "2 tbsp daily on empty stomach",
    "caution": "Bitter taste; use carefully with medications."
  },
  {
    "category": "Diabetes",
    "title": "Turmeric-Amla Juice - Anti-inflammatory Combo",
    "plant": "Turmeric & Indian Gooseberry",
    "partUsed": "Root & fruit",
    "ingredients": [
      "1 tsp turmeric powder",
      "½ cup fresh amla juice"
    ],
    "preparation": "Mix turmeric powder into amla juice.",
    "dosage": "Morning or night daily",
    "caution": "May interact with blood thinners."
  },
  {
    "category": "Diabetes",
    "title": "Bael Leaves Tea - Pancreatic Support",
    "plant": "Bael",
    "partUsed": "Leaves",
    "ingredients": [
      "5–6 fresh/dried bael leaves",
      "1.5 cups water"
    ],
    "preparation": "Boil leaves in water for 5 minutes. Strain and drink.",
    "dosage": "Once daily before breakfast",
    "caution": "Avoid during pregnancy."
  },
  {
    "category": "Diabetes",
    "title": "Jamun Seed Powder - Insulin Regulator",
    "plant": "Jamun",
    "partUsed": "Seeds",
    "ingredients": [
      "5–6 dried Jamun seeds"
    ],
    "preparation": "Dry seeds, grind to powder, and store.",
    "dosage": "1 tsp with warm water twice a day",
    "caution": "Store in a dry place."
  },
  {
    "category": "Diabetes",
    "title": "Vijaysar Decoction - Traditional Sugar Control",
    "plant": "Vijaysar",
    "partUsed": "Wood",
    "ingredients": [
      "Small piece of Vijaysar wood",
      "1 cup water"
    ],
    "preparation": "Soak wood overnight. Drink the water next morning.",
    "dosage": "Daily",
    "caution": "Do not reuse wood for long periods."
  },
  {
    "category": "Diabetes",
    "title": "Cinnamon Water - Insulin Sensitivity Booster",
    "plant": "Cinnamon",
    "partUsed": "Bark",
    "ingredients": [
      "1 small cinnamon stick",
      "1.5 cups water"
    ],
    "preparation": "Boil cinnamon in water for 10 minutes. Cool and drink.",
    "dosage": "Twice daily",
    "caution": "Avoid in excess—may heat the body."
  },
  {
    "category": "Diabetes",
    "title": "Black Plum Fruit - Urination Control",
    "plant": "Jamun",
    "partUsed": "Fruit",
    "ingredients": [
      "½ cup fresh Jamun fruit"
    ],
    "preparation": "Eat raw or juice (without seeds).",
    "dosage": "Seasonal – ½ cup daily",
    "caution": "Don't combine with Jamun seed powder on the same day."
  },
  {
    "category": "BloodPressure",
    "title": "Ashwagandha Tea - Stress Reliever",
    "plant": "Ashwagandha (Withania somnifera)",
    "partUsed": "Root",
    "ingredients": [
      "1 tsp Ashwagandha root powder",
      "1 cup water"
    ],
    "preparation": "Boil root powder in water for 5–7 minutes. Strain and drink.",
    "dosage": "Once daily in evening",
    "caution": "Avoid during pregnancy or hyperthyroidism"
  },
  {
    "category": "BloodPressure",
    "title": "Arjuna Bark Decoction - Heart Strengthener",
    "plant": "Arjuna (Terminalia arjuna)",
    "partUsed": "Bark",
    "ingredients": [
      "1 tbsp Arjuna bark",
      "1.5 cups water"
    ],
    "preparation": "Boil bark in water for 10 minutes. Strain and drink warm.",
    "dosage": "Once or twice daily",
    "caution": "Monitor BP levels regularly"
  },
  {
    "category": "BloodPressure",
    "title": "Garlic Clove - Natural BP Reducer",
    "plant": "Garlic",
    "partUsed": "Clove",
    "ingredients": [
      "1 raw garlic clove"
    ],
    "preparation": "Chew raw clove in the morning with water.",
    "dosage": "Daily",
    "caution": "Avoid excess, may thin blood"
  },
  {
    "category": "BloodPressure",
    "title": "Amla Juice - Vitamin C Boost",
    "plant": "Amla",
    "partUsed": "Fruit",
    "ingredients": [
      "2 tbsp fresh amla juice",
      "½ cup water"
    ],
    "preparation": "Mix juice with water and drink.",
    "dosage": "Morning on empty stomach",
    "caution": "Check for acidity in sensitive stomachs"
  },
  {
    "category": "BloodPressure",
    "title": "Brahmi Tea - Circulation Improver",
    "plant": "Brahmi",
    "partUsed": "Leaves",
    "ingredients": [
      "5–6 fresh Brahmi leaves or 1 tsp dried leaves",
      "1 cup hot water"
    ],
    "preparation": "Steep leaves in hot water for 5 minutes. Strain and drink.",
    "dosage": "1 cup daily",
    "caution": "Avoid excess in hypotension"
  },
  {
    "category": "BloodPressure",
    "title": "Flax Seeds - Omega-3 Source",
    "plant": "Flax",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp flaxseeds",
      "1 cup warm water"
    ],
    "preparation": "Dry roast seeds, grind into powder, and mix with water.",
    "dosage": "Morning or evening",
    "caution": "Drink plenty of water"
  },
  {
    "category": "BloodPressure",
    "title": "Hibiscus Tea - Natural ACE Inhibitor",
    "plant": "Hibiscus",
    "partUsed": "Dried petals",
    "ingredients": [
      "5–6 dried hibiscus petals",
      "1.5 cups water"
    ],
    "preparation": "Boil petals in water for 5–7 minutes. Strain and drink.",
    "dosage": "Once daily",
    "caution": "Avoid if on BP meds (can double effect)"
  },
  {
    "category": "BloodPressure",
    "title": "Gotu Kola - Blood Vessel Support",
    "plant": "Gotu Kola",
    "partUsed": "Leaves",
    "ingredients": [
      "3–4 fresh Gotu Kola leaves",
      "1 cup water (for decoction)"
    ],
    "preparation": "Blend leaves into smoothies or boil in water for tea.",
    "dosage": "Few leaves daily",
    "caution": "Consult doctor if on blood thinners"
  },
  {
    "category": "BloodPressure",
    "title": "Methi Seeds Water - Artery Cleanser",
    "plant": "Fenugreek",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp fenugreek seeds",
      "1 cup water (for soaking)"
    ],
    "preparation": "Soak seeds overnight. Drink the water in the morning.",
    "dosage": "Daily",
    "caution": "May reduce blood sugar too"
  },
  {
    "category": "BloodPressure",
    "title": "Tulsi Lemon Water - Heart Support",
    "plant": "Tulsi + Lemon",
    "partUsed": "Leaves + Juice",
    "ingredients": [
      "5–6 fresh Tulsi leaves",
      "1 tsp lemon juice",
      "1 cup warm water"
    ],
    "preparation": "Crush Tulsi leaves, add lemon juice to warm water, and drink.",
    "dosage": "Morning or before bed",
    "caution": "Use fresh leaves only"
  },
  {
    "category": "Thyroid",
    "title": "Ashwagandha - Thyroid Hormone Balancer",
    "plant": "Withania somnifera",
    "partUsed": "Root powder",
    "ingredients": [
      "1 tsp Ashwagandha powder",
      "1 cup warm milk or water"
    ],
    "preparation": "Mix powder in warm liquid and consume.",
    "dosage": "Once daily, preferably at night",
    "caution": "Avoid in hyperthyroidism or during pregnancy"
  },
  {
    "category": "Thyroid",
    "title": "Guggul - Thyroid Gland Stimulant",
    "plant": "Guggul (Commiphora mukul)",
    "partUsed": "Resin extract",
    "ingredients": [
      "As per doctor's prescription (tablet/powder)"
    ],
    "preparation": "Take with warm water or milk as directed.",
    "dosage": "As directed by an Ayurvedic doctor",
    "caution": "Avoid without professional consultation"
  },
  {
    "category": "Thyroid",
    "title": "Brahmi - Thyroid Anxiety Relief",
    "plant": "Brahmi (Bacopa monnieri)",
    "partUsed": "Leaves",
    "ingredients": [
      "5–6 fresh Brahmi leaves or 1 tsp dried powder",
      "1 cup hot water"
    ],
    "preparation": "Steep leaves in hot water for tea or take capsules.",
    "dosage": "1–2 cups daily",
    "caution": "May cause drowsiness in high doses"
  },
  {
    "category": "Thyroid",
    "title": "Licorice Root - Adrenal Support",
    "plant": "Glycyrrhiza glabra",
    "partUsed": "Root",
    "ingredients": [
      "1-inch licorice root slice",
      "1.5 cups water"
    ],
    "preparation": "Boil root slices in water for 5–7 minutes. Strain and drink.",
    "dosage": "1 cup every alternate day",
    "caution": "Avoid in high BP patients"
  },
  {
    "category": "Thyroid",
    "title": "Kanchanar Guggulu - Thyroid Nodule Support",
    "plant": "Bauhinia variegata + Guggul",
    "partUsed": "Bark + Resin",
    "ingredients": [
      "As prescribed (tablet form)"
    ],
    "preparation": "Take with warm water as directed.",
    "dosage": "As prescribed by Ayurvedic doctor",
    "caution": "Not for self-medication"
  },
  {
    "category": "Thyroid",
    "title": "Shankhpushpi - Metabolism Booster",
    "plant": "Shankhpushpi",
    "partUsed": "Whole herb",
    "ingredients": [
      "1 tsp Shankhpushpi syrup",
      "½ cup warm water"
    ],
    "preparation": "Mix syrup in warm water and drink.",
    "dosage": "1 tsp twice daily",
    "caution": "Avoid overdose"
  },
  {
    "category": "Thyroid",
    "title": "Coconut Oil - Hypothyroid Support",
    "plant": "Coconut",
    "partUsed": "Oil",
    "ingredients": [
      "1 tsp virgin coconut oil"
    ],
    "preparation": "Add to warm milk, tea, or food.",
    "dosage": "Once daily",
    "caution": "Choose virgin, cold-pressed oil only"
  },
  {
    "category": "Thyroid",
    "title": "Moringa - Nutrient-Rich Thyroid Support",
    "plant": "Moringa",
    "partUsed": "Leaves",
    "ingredients": [
      "5–6 fresh Moringa leaves or 1 tsp powder"
    ],
    "preparation": "Add to meals, smoothies, or make tea.",
    "dosage": "Regular dietary use",
    "caution": "Monitor iron levels"
  },
  {
    "category": "Thyroid",
    "title": "Flax Seeds - Hormonal Balance",
    "plant": "Flax",
    "partUsed": "Seeds",
    "ingredients": [
      "1 tsp ground flaxseeds",
      "1 cup warm water or smoothie"
    ],
    "preparation": "Mix ground seeds into liquids or food.",
    "dosage": "1 tsp daily",
    "caution": "Drink water with it"
  },
  {
    "category": "Thyroid",
    "title": "Triphala - Digestion Support",
    "plant": "Haritaki, Bibhitaki, Amalaki",
    "partUsed": "Fruits",
    "ingredients": [
      "1 tsp Triphala powder",
      "1 cup warm water"
    ],
    "preparation": "Mix powder in warm water before bed.",
    "dosage": "Once daily",
    "caution": "Avoid loose motion cases"
  },
  {
    "category": "EyeHealth",
    "title": "Triphala Eye Wash - Eye Cleanser",
    "plant": "Haritaki, Bibhitaki, Amalaki",
    "partUsed": "Fruits",
    "ingredients": [
      "1 tsp Triphala churna",
      "1 cup warm water"
    ],
    "preparation": "Soak Triphala powder in warm water overnight. Strain through cotton cloth in the morning.",
    "usage": "Wash eyes with strained water using an eye cup.",
    "caution": "Always strain properly to avoid irritation. Discontinue if burning occurs."
  },
  {
    "category": "EyeHealth",
    "title": "Castor Oil - Dry Eye Relief",
    "plant": "Ricinus communis",
    "partUsed": "Oil",
    "ingredients": [
      "Sterile organic castor oil (eye-grade)"
    ],
    "preparation": "Use directly from sterile bottle.",
    "usage": "1 drop in each eye at bedtime (with doctor's approval).",
    "caution": "Only use pharmaceutical-grade, preservative-free oil. Avoid if wearing contacts."
  },
  {
    "category": "EyeHealth",
    "title": "Netra Tarpana - Eye Nourishment",
    "plant": "Cow Ghee",
    "partUsed": "Clarified butter",
    "ingredients": [
      "2 tbsp warm medicated ghee",
      "Dough ring (made from chickpea flour)"
    ],
    "preparation": "Professional Ayurvedic treatment where ghee is held in dough-formed eye sockets.",
    "usage": "Performed by trained practitioners for 10-15 minutes.",
    "caution": "Requires professional supervision. Not for home use."
  },
  {
    "category": "EyeHealth",
    "title": "Trataka - Vision Sharpening",
    "practice": "Yogic Eye Exercise",
    "ingredients": [
      "Candle with steady flame",
      "Dark, quiet space"
    ],
    "preparation": "Sit comfortably 2-3 feet from candle at eye level.",
    "usage": "Gaze steadily at flame for 3-5 minutes without blinking, then close eyes.",
    "caution": "Avoid with eye strain/infections. Stop if headache occurs."
  },
  {
    "category": "EyeHealth",
    "title": "Anjana - Eye Protection",
    "plant": "Triphala/Berberis",
    "partUsed": "Herbal paste",
    "ingredients": [
      "Traditional herbal kajal (e.g., Triphala-based)"
    ],
    "preparation": "Use prepared herbal formulation.",
    "usage": "Apply rice-grain amount to inner eyelid margin at bedtime.",
    "caution": "Ensure product is chemical-free. Discontinue if irritation occurs."
  },
  {
    "category": "EyeHealth",
    "title": "Amalaki - Eye Rejuvenation",
    "plant": "Emblica officinalis",
    "partUsed": "Fruit",
    "ingredients": [
      "1 tsp Amla powder",
      "1 tsp honey (optional)"
    ],
    "preparation": "Mix powder with honey or warm water.",
    "usage": "Consume in morning on empty stomach.",
    "caution": "May cause cooling effect. Avoid with cold sensitivity."
  },
  {
    "category": "EyeHealth",
    "title": "Bhringraj Juice - Eye-Liver Support",
    "plant": "Eclipta alba",
    "partUsed": "Leaves",
    "ingredients": [
      "10-12 fresh Bhringraj leaves",
      "2 tbsp water (for extraction)"
    ],
    "preparation": "Grind leaves with water, strain through muslin cloth.",
    "usage": "Take 1 tsp juice with 1/4 cup water daily.",
    "caution": "Monitor for allergic reactions. Bitter taste."
  },
  {
    "category": "EyeHealth",
    "title": "Carrot-Beetroot Juice - Night Vision",
    "plant": "Daucus carota & Beta vulgaris",
    "partUsed": "Roots",
    "ingredients": [
      "1 medium carrot",
      "1/2 small beetroot",
      "1/2 inch ginger (optional)"
    ],
    "preparation": "Juice vegetables together. Consume immediately.",
    "usage": "1 glass (200ml) every morning.",
    "caution": "May temporarily stain teeth. Rinse mouth after drinking."
  },
  {
    "category": "EyeHealth",
    "title": "Baheda - Eye Clarity",
    "plant": "Terminalia bellirica",
    "partUsed": "Fruit",
    "ingredients": [
      "1/2 tsp Baheda powder",
      "1 cup warm water"
    ],
    "preparation": "Mix powder in water or use as part of Triphala.",
    "usage": "Consume at bedtime.",
    "caution": "Not recommended for hypotensive patients."
  },
  {
    "category": "EyeHealth",
    "title": "Rose Water - Eye Refreshment",
    "plant": "Rosa damascena",
    "partUsed": "Petals",
    "ingredients": [
      "Pure steam-distilled rose water"
    ],
    "preparation": "Use directly from sterile bottle.",
    "usage": "1-2 drops in each eye as needed for refreshment.",
    "caution": "Must be preservative-free. Check for purity."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Brahmi Tea – Improves memory, reduces anxiety",
    "plant": "Bacopa monnieri",
    "partUsed": "Leaves",
    "ingredients": [
      "1 tsp dried Brahmi leaves",
      "1.5 cups water",
      "1/4 tsp honey (optional)"
    ],
    "preparation": "Simmer leaves in water for 5 minutes. Strain and add honey if desired.",
    "usage": "Drink 1-2 cups daily, preferably in morning.",
    "caution": "Avoid during pregnancy. May cause mild drowsiness."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Ashwagandha Milk – Balances cortisol, supports sleep",
    "plant": "Withania somnifera",
    "partUsed": "Root",
    "ingredients": [
      "1 tsp Ashwagandha powder",
      "1 cup warm milk",
      "1/4 tsp cinnamon (optional)"
    ],
    "preparation": "Mix powder in warm milk. Add cinnamon for flavor.",
    "usage": "Consume 30 minutes before bedtime.",
    "caution": "Contraindicated in hyperthyroidism. Avoid with sedatives."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Shankhpushpi Syrup – Relieves tension & mental fatigue",
    "plant": "Convolvulus pluricaulis",
    "partUsed": "Whole plant",
    "ingredients": [
      "1-2 tsp ready-made Shankhpushpi syrup"
    ],
    "preparation": "Available in Ayurvedic pharmacies.",
    "usage": "Take with warm water twice daily after meals.",
    "caution": "Consult practitioner for long-term use. Sweet taste."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Jatamansi Paste – Calms nerves, supports restful sleep",
    "plant": "Nardostachys jatamansi",
    "partUsed": "Root",
    "ingredients": [
      "1/2 tsp Jatamansi powder",
      "1 tsp honey or ghee"
    ],
    "preparation": "Make paste with honey/ghee.",
    "usage": "Apply to forehead or consume with warm milk at night.",
    "caution": "Strong earthy aroma. Start with small doses."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Tulsi (Holy Basil) Infusion – Natural adaptogen, anti-stress",
    "plant": "Ocimum sanctum",
    "partUsed": "Leaves",
    "ingredients": [
      "4-5 fresh Tulsi leaves",
      "1.5 cups water",
      "1 tsp lemon juice (optional)"
    ],
    "preparation": "Steep leaves in hot water for 5 minutes. Add lemon if desired.",
    "usage": "Sip 2-3 times during stressful periods.",
    "caution": "May lower blood sugar. Monitor if diabetic."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Trataka (Candle Meditation) – Clears mental clutter, enhances focus",
    "practice": "Yogic Technique",
    "ingredients": [
      "Ghee lamp or steady candle flame",
      "Quiet space"
    ],
    "preparation": "Place candle at eye level 2-3 feet away in dark room.",
    "usage": "Practice daily for 3-5 minutes, followed by palming eyes.",
    "caution": "Avoid with eye strain. Blink normally if discomfort occurs."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Abhyanga (Oil Massage with Sesame Oil) – Grounds Vata, reduces anxiety",
    "plant": "Sesamum indicum",
    "partUsed": "Oil",
    "ingredients": [
      "1/4 cup warm sesame oil",
      "3 drops lavender essential oil (optional)"
    ],
    "preparation": "Warm oil to comfortable temperature.",
    "usage": "Self-massage entire body before morning shower 2-3x/week.",
    "caution": "Not during acute illness. Test oil temperature first."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Tagara (Valerian) Powder – Natural sedative for calming sleep",
    "plant": "Valeriana wallichii",
    "partUsed": "Root",
    "ingredients": [
      "1/4 tsp Tagara powder",
      "1/2 cup warm water or milk"
    ],
    "preparation": "Mix powder in liquid.",
    "usage": "Consume 30 minutes before bedtime.",
    "caution": "May cause drowsiness. Avoid with alcohol or sedatives."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Chamomile Tea with Licorice – Soothes nerves, balances hormones",
    "plant": "Matricaria chamomilla + Glycyrrhiza glabra",
    "partUsed": "Flowers + Root",
    "ingredients": [
      "1 tsp chamomile flowers",
      "1/4 inch licorice root slice",
      "1.5 cups water"
    ],
    "preparation": "Steep ingredients in hot water for 7-10 minutes.",
    "usage": "Drink warm in evening.",
    "caution": "Omit licorice in hypertension or edema."
  },
  {
    "category": "StressAndAnxiety",
    "title": "Nasya with Brahmi Oil – Balances prana, clears emotional fog",
    "plant": "Bacopa monnieri",
    "partUsed": "Oil",
    "ingredients": [
      "2 drops Brahmi oil per nostril"
    ],
    "preparation": "Lie down with head tilted back slightly.",
    "usage": "Administer after morning shower (under guidance).",
    "caution": "Avoid during cold/flu. Use only pure medicated oil."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Nasya Therapy - Ancient Nasal Oil Ritual",
    "plant": "Sesame or Medicated Oil",
    "partUsed": "Oil",
    "ingredients": [
      "2-5 drops warm herbal nasal oil (e.g., Anu Taila or sesame oil)"
    ],
    "preparation": "Warm oil to lukewarm temperature (test on wrist).",
    "usage": "Administer 2-5 drops into each nostril while lying down with head tilted back slightly.",
    "dosage": "Once daily, or up to twice during headache episodes",
    "caution": "Avoid with nosebleeds, severe congestion, or ear infections. Do not go out in cold immediately after."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Ashwagandha Tonic - Stress-Buster",
    "plant": "Withania somnifera",
    "partUsed": "Root",
    "ingredients": [
      "1 tsp Ashwagandha powder",
      "1 cup warm milk or water",
      "Optional: pinch of cardamom or turmeric"
    ],
    "preparation": "Mix powder into warm liquid. Let steep for 5 minutes.",
    "usage": "Drink slowly.",
    "dosage": "Once daily at bedtime",
    "caution": "Avoid during pregnancy or with thyroid medications. May cause drowsiness."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Brahmi Infusion - Brain Tonic",
    "plant": "Bacopa monnieri",
    "partUsed": "Leaves",
    "ingredients": [
      "1 tsp Brahmi powder or 5-6 fresh leaves",
      "1 cup hot water",
      "Optional: honey or tulsi leaves"
    ],
    "preparation": "Steep in hot water for 5-10 minutes. Strain.",
    "usage": "Sip warm.",
    "dosage": "1-2 times daily (morning/evening)",
    "caution": "Not recommended during pregnancy without medical advice. May interact with sedatives."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Camphor-Jaggery Halwa - Migraine Tonic",
    "plant": "Edible Camphor",
    "partUsed": "Resin",
    "ingredients": [
      "½ tsp jaggery",
      "1 tsp ghee",
      "Edible camphor (size of 1 chana dal)"
    ],
    "preparation": "Melt jaggery in ghee on low heat. Mix in camphor until dissolved.",
    "usage": "Consume as directed.",
    "dosage": "1 hour before sunrise for 3 consecutive days monthly",
    "caution": "Use only edible-grade camphor. Not for pregnant women or children without supervision."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Aak Sap-Jaggery - Migraine Relief",
    "plant": "Calotropis gigantea",
    "partUsed": "Sap",
    "ingredients": [
      "1 drop Aak plant sap",
      "Pinch of jaggery"
    ],
    "preparation": "Mix sap with jaggery.",
    "usage": "Consume then rest in warm environment until sweating occurs.",
    "dosage": "1 hour before sunrise for 3 consecutive days monthly",
    "caution": "Only 1 drop required. Avoid fans/AC after use. Not for self-experimentation."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Shiro Abhyanga - Head Massage",
    "plant": "Sesame/Brahmi Oil",
    "partUsed": "Oil",
    "ingredients": [
      "1-2 tbsp warm herbal oil (sesame, Brahmi or Dashmoola)"
    ],
    "preparation": "Warm oil to comfortable temperature.",
    "usage": "Massage scalp, forehead and neck for 5-10 minutes.",
    "dosage": "Daily or during headache onset",
    "caution": "Avoid with scalp wounds/infections. Use allergy-tested oils."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Shirodhara - Oil Stream Therapy",
    "plant": "Coconut/Sandalwood Oil",
    "partUsed": "Oil",
    "ingredients": [
      "Medicated oil (as prescribed by practitioner)"
    ],
    "preparation": "Oil warmed to therapeutic temperature.",
    "usage": "Continuous stream poured on forehead for 20-30 minutes.",
    "dosage": "As recommended by Ayurvedic doctor",
    "caution": "Requires professional administration. Avoid with low BP or neurological conditions."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Clove Paste - Pain Reliever",
    "plant": "Syzygium aromaticum",
    "partUsed": "Bud",
    "ingredients": [
      "4-5 cloves",
      "Few drops water/oil"
    ],
    "preparation": "Grind into smooth paste.",
    "usage": "Apply on forehead and temples.",
    "dosage": "Leave for 10-15 minutes as needed",
    "caution": "May cause burning if left too long. Avoid on broken skin."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Sandalwood-Tulsi Paste - Cooling Mask",
    "plant": "Santalum album + Ocimum sanctum",
    "partUsed": "Wood + Leaves",
    "ingredients": [
      "1 tsp sandalwood powder",
      "5-6 tulsi leaves (crushed)",
      "Water as needed"
    ],
    "preparation": "Make smooth paste.",
    "usage": "Apply to forehead and temples.",
    "dosage": "Leave for 10 minutes during headache",
    "caution": "Patch test first. Avoid in humid conditions."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Iris Versicolor 30C - Gastric Migraine",
    "plant": "Homeopathic Remedy",
    "partUsed": "N/A",
    "ingredients": [
      "Iris Versicolor 30C globules"
    ],
    "preparation": "As directed by homeopath.",
    "usage": "Under tongue administration.",
    "dosage": "2-3 globules 1-2 times daily during episodes",
    "caution": "Professional guidance required. Not for self-medication."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Natrum Carbonicum 30C - Sun Headache",
    "plant": "Homeopathic Remedy",
    "partUsed": "N/A",
    "ingredients": [
      "Natrum Carbonicum 30C globules"
    ],
    "preparation": "As directed by homeopath.",
    "usage": "Under tongue administration.",
    "dosage": "2-3 globules 1-2 times daily as needed",
    "caution": "Store away from strong odors. Consult for chronic cases."
  },
  {
    "category": "HeadacheAndMigraine",
    "title": "Spigelia 30C - Left-Sided Neuralgia",
    "plant": "Homeopathic Remedy",
    "partUsed": "N/A",
    "ingredients": [
      "Spigelia 30C globules"
    ],
    "preparation": "As directed by homeopath.",
    "usage": "Under tongue administration.",
    "dosage": "2-3 globules 1-2 times daily during episodes",
    "caution": "Professional supervision required for neuralgic pain."
  },
  {
    "category": "CosmeticTreatment",
    "title": "Kumkumadi Tailam - Saffron Oil Serum",
    "plant": "Saffron, Sandalwood, Manjistha, Licorice",
    "partUsed": "Herbal infusion in oil",
    "ingredients": [
      "Kesar (Saffron)",
      "Manjistha",
      "Chandana (Sandalwood)",
      "Yashtimadhu (Licorice)",
      "Sesame oil base"
    ],
    "preparation": "Traditionally prepared by infusing herbs into sesame oil over several hours using Ayurvedic methods",
    "usage": "Massage 2-3 drops onto cleansed face in upward circular motions",
    "dosage": "Daily at night",
    "caution": "Do patch test before first use. Avoid during active acne flare-ups or extremely oily skin.",
    "benefits": [
      "Removes dark spots and hyperpigmentation",
      "Improves skin texture and glow",
      "Prevents signs of aging"
    ]
  },
  {
    "category": "CosmeticTreatment",
    "title": "Nalpamaradi Thailam with Besan Mask",
    "plant": "Four fig tree barks, Turmeric, Vetiver",
    "partUsed": "Herbal infusion in oil",
    "ingredients": [
      "Nalpamara bark blend",
      "Haridra (Turmeric)",
      "Ushira (Vetiver)",
      "Sesame or Coconut oil base",
      "Besan (gram flour)",
      "Lemon juice (2-3 drops)"
    ],
    "preparation": "Mix warmed Nalpamaradi Thailam with besan and lemon juice to make thick paste",
    "usage": "Apply to face and neck, leave for 30 minutes, then rinse",
    "dosage": "2-3 times per week",
    "caution": "May stain clothes. Patch test recommended for sensitive skin.",
    "benefits": [
      "Removes sun tan and pigmentation",
      "Brightens complexion",
      "Treats uneven skin tone"
    ]
  },
  {
  "category": "LiverProblem",
  "title": "Triphala & Turmeric Liver Detox Tea",
  "plant": "Triphala (Amla, Haritaki, Bibhitaki) and Turmeric",
  "partUsed": "Fruits and Rhizome",
  "ingredients": [
    "1 tsp Triphala churna",
    "¼ tsp turmeric powder",
    "2 cups water",
    "Optional: few tulsi leaves or thin ginger slice"
  ],
  "preparation": "Boil water with turmeric and Triphala for 5 minutes. Optionally add tulsi/ginger. Strain and cool to warm temperature.",
  "dosage": "Sip once daily, 30 minutes before lunch for 1-2 weeks",
  "caution": "Avoid with gallstones. Use cooled water to protect tooth enamel. Monitor during pregnancy/long-term use.",
  "benefits": [
    "Gently cleanses liver and supports digestion",
    "Reduces liver inflammation",
    "Boosts detox pathways"
  ]
},
{
  "category": "MenSexualHealth",
  "title": "Ashwagandha + Kapikacchu Vitality Tonic",
  "plant": "Withania somnifera (Ashwagandha) and Mucuna pruriens (Kapikacchu)",
  "partUsed": "Root and Seeds",
  "ingredients": [
    "1 tsp Ashwagandha root powder",
    "1 tsp Kapikacchu seed powder",
    "200 ml warm milk or coconut water",
    "Optional: pinch of black pepper"
  ],
  "preparation": "1. Mix powders in cup\n2. Add hot liquid and stir\n3. Add black pepper if using\n4. Steep for 3 minutes (strain optional)",
  "dosage": "Once daily at bedtime for 4-6 weeks, then 1-2 week break",
  "caution": "Avoid with hyperthyroidism, bipolar disorder, or during medications containing L-DOPA",
  "benefits": [
    "Boosts libido and sexual energy",
    "Enhances stamina and vitality",
    "Supports reproductive health"
  ]
},
{
  "category": "RespiratoryIssues",
  "title": "Koththamalli Tea (Coriander + Ginger Tea)",
  "plant": "Coriandrum sativum (Coriander) and Zingiber officinale (Ginger)",
  "partUsed": "Seeds and Rhizome",
  "ingredients": [
    "1 tsp coriander seeds",
    "1 inch fresh ginger (sliced/grated)",
    "2 cups water",
    "Optional: dash of black pepper or few tulsi leaves",
    "Optional: honey for sweetening"
  ],
  "preparation": "1. Lightly crush coriander seeds\n2. Boil with ginger in water for 8-10 minutes\n3. Strain and optionally add honey",
  "dosage": "Drink warm twice daily for 5-7 days during symptoms",
  "caution": "Use caution with acid reflux. Heating spices best in cold seasons.",
  "benefits": [
    "Soothes inflamed airways",
    "Reduces mucus production",
    "Eases congestion and cough",
    "Effective for colds and bronchitis"
  ]
},
  {
    "category": "PsychologicalIssues",
    "subcategory": "Anxiety",
    "title": "Ashwagandha Tea",
    "plant": "Withania somnifera",
    "partUsed": "Root",
    "ingredients": [
      "1 tsp Ashwagandha root powder",
      "1 cup warm milk or water"
    ],
    "preparation": "Boil powder in milk/water for 5 minutes. Strain and drink.",
    "dosage": "Before bedtime",
    "caution": "Avoid in hyperthyroidism",
    "benefits": [
      "Calms nervous system",
      "Reduces cortisol",
      "Enhances mental resilience"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Anxiety",
    "title": "Brahmi Ghrita",
    "plant": "Bacopa monnieri",
    "partUsed": "Leaves in ghee",
    "ingredients": [
      "1 tsp Brahmi Ghrita",
      "Warm water"
    ],
    "preparation": "Ready-made preparation",
    "dosage": "1 tsp on empty stomach with warm water",
    "caution": "Consult practitioner for dosage",
    "benefits": [
      "Brain tonic",
      "Reduces anxiety",
      "Promotes mental clarity"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Depression",
    "title": "Shankhpushpi Syrup",
    "plant": "Convolvulus pluricaulis",
    "partUsed": "Whole plant",
    "ingredients": [
      "1-2 tsp Shankhpushpi syrup",
      "Warm water or milk"
    ],
    "preparation": "Ready-made syrup",
    "dosage": "Twice daily",
    "caution": "Monitor for drowsiness",
    "benefits": [
      "Uplifts mood",
      "Reduces mental fatigue",
      "Improves cognitive function"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Depression",
    "title": "Yoga + Pranayama",
    "practice": "Anulom Vilom & Bhramari",
    "duration": "10-15 mins daily",
    "benefits": [
      "Stimulates energy",
      "Clears negativity",
      "Stabilizes emotions"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Insomnia",
    "title": "Jatamansi Oil Massage",
    "plant": "Nardostachys jatamansi",
    "partUsed": "Oil",
    "usage": "Massage on forehead and soles",
    "dosage": "Before sleeping",
    "benefits": [
      "Induces natural sleep",
      "Reduces nervous hyperactivity"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Insomnia",
    "title": "Nutmeg Milk",
    "plant": "Myristica fragrans",
    "partUsed": "Seed powder",
    "ingredients": [
      "Pinch of nutmeg",
      "1 cup warm milk"
    ],
    "preparation": "Mix nutmeg in warm milk",
    "dosage": "Before bedtime",
    "caution": "Use small amounts only",
    "benefits": [
      "Natural sedative",
      "Promotes restful sleep",
      "Calms Vata dosha"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Anxiety",
    "title": "Ashwagandha Tea",
    "plant": "Withania somnifera",
    "partUsed": "Root",
    "ingredients": [
      "1 tsp Ashwagandha root powder",
      "1 cup warm milk or water"
    ],
    "preparation": "Boil powder in milk/water for 5 minutes. Strain and drink.",
    "dosage": "Before bedtime",
    "caution": "Avoid in hyperthyroidism",
    "benefits": [
      "Calms nervous system",
      "Reduces cortisol",
      "Enhances mental resilience"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Anxiety",
    "title": "Brahmi Ghrita",
    "plant": "Bacopa monnieri",
    "partUsed": "Leaves in ghee",
    "ingredients": [
      "1 tsp Brahmi Ghrita",
      "Warm water"
    ],
    "preparation": "Ready-made preparation",
    "dosage": "1 tsp on empty stomach with warm water",
    "caution": "Consult practitioner for dosage",
    "benefits": [
      "Brain tonic",
      "Reduces anxiety",
      "Promotes mental clarity"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Depression",
    "title": "Shankhpushpi Syrup",
    "plant": "Convolvulus pluricaulis",
    "partUsed": "Whole plant",
    "ingredients": [
      "1-2 tsp Shankhpushpi syrup",
      "Warm water or milk"
    ],
    "preparation": "Ready-made syrup",
    "dosage": "Twice daily",
    "caution": "Monitor for drowsiness",
    "benefits": [
      "Uplifts mood",
      "Reduces mental fatigue",
      "Improves cognitive function"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Depression",
    "title": "Yoga + Pranayama",
    "practice": "Anulom Vilom & Bhramari",
    "duration": "10-15 mins daily",
    "benefits": [
      "Stimulates energy",
      "Clears negativity",
      "Stabilizes emotions"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Insomnia",
    "title": "Jatamansi Oil Massage",
    "plant": "Nardostachys jatamansi",
    "partUsed": "Oil",
    "usage": "Massage on forehead and soles",
    "dosage": "Before sleeping",
    "benefits": [
      "Induces natural sleep",
      "Reduces nervous hyperactivity"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Insomnia",
    "title": "Nutmeg Milk",
    "plant": "Myristica fragrans",
    "partUsed": "Seed powder",
    "ingredients": [
      "Pinch of nutmeg",
      "1 cup warm milk"
    ],
    "preparation": "Mix nutmeg in warm milk",
    "dosage": "Before bedtime",
    "caution": "Use small amounts only",
    "benefits": [
      "Natural sedative",
      "Promotes restful sleep",
      "Calms Vata dosha"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "OCD",
    "title": "Vacha Powder",
    "plant": "Acorus calamus",
    "partUsed": "Root",
    "dosage": "250 mg with honey (under guidance)",
    "caution": "Requires professional supervision",
    "benefits": [
      "Sharpens intellect",
      "Clears excessive thoughts"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Stress",
    "title": "Medhya Rasayana",
    "plants": [
      "Brahmi",
      "Shankhpushpi",
      "Mandukaparni",
      "Yashtimadhu"
    ],
    "dosage": "1 tsp twice daily with honey/ghee",
    "benefits": [
      "Nourishes brain",
      "Enhances mental recovery",
      "Reduces fatigue"
    ]
  },
  {
    "category": "PsychologicalIssues",
    "subcategory": "Stress",
    "title": "Abhyanga Massage",
    "oil": "Ksheerabala or Sesame",
    "frequency": "2-3 times weekly",
    "method": "Full body massage + warm bath",
    "benefits": [
      "Recharges nervous system",
      "Reduces burnout",
      "Grounds Vata"
    ]
  },
    {
        "category": "HeartHealth",
        "title": "Arjuna Bark Decoction",
        "plant": "Terminalia arjuna",
        "partUsed": "Bark",
        "ingredients": [
          "1 tsp Arjuna bark powder",
          "1 cup water"
        ],
        "preparation": "Boil bark powder in water or use readymade Arjunarishta",
        "dosage": "20 ml Arjunarishta + equal water twice daily after meals",
        "benefits": [
          "Strengthens cardiac muscles",
          "Improves circulation",
          "Balances blood pressure"
        ],
        "note": "Ayurveda is supportive, not a substitute for emergency cardiac care. Always follow modern cardiologist advice for serious conditions."
      },
      {
        "category": "HeartHealth",
        "title": "Triphala + Honey For Cholesterol",
        "plant" : "N/A",
        "ingredients": [
          "1 tsp Triphala powder",
          "1 tsp honey"
        ],
        "preparation": "Mix well",
        "dosage": "Take at night",
        "benefits": [
          "Detoxifies",
          "Improves lipid profile",
          "Helps weight balance"
        ],
        "note": "Ayurveda is supportive, not a substitute for emergency cardiac care. Always follow modern cardiologist advice for serious conditions."
      },
      {
        "category": "HeartHealth",
        "title": "Garlic (Lashuna) Capsules or Paste",
        "plant": "Allium sativum",
        "partUsed": "Clove",
        "dosage": "1-2 raw garlic cloves crushed or capsules daily",
        "benefits": [
          "Lowers cholesterol",
          "Prevents artery plaque",
          "Supports circulation"
        ],
        "note": "Ayurveda is supportive, not a substitute for emergency cardiac care. Always follow modern cardiologist advice for serious conditions."
      },
      {
        "category": "HeartHealth",
        "title": "Punarnava Decoction",
        "plant": "Boerhavia diffusa",
        "partUsed": "Whole plant",
        "ingredients": [
          "1 tsp Punarnava powder",
          "1 cup water"
        ],
        "preparation": "Boil in water",
        "dosage": "Once daily",
        "benefits": [
          "Removes water retention",
          "Improves cardiac efficiency"
        ],
        "note": "Ayurveda is supportive, not a substitute for emergency cardiac care. Always follow modern cardiologist advice for serious conditions."
      },
      {
        "category": "HeartHealth",
        "title": "Stress-Relieving Pranayama",
        "plant" : "N/A",
        "practice": "Anulom-Vilom + Bhramari",
        "duration": "10-15 mins/day",
        "benefits": [
          "Reduces heart strain",
          "Lowers blood pressure",
          "Calms nervous system"
        ],
        "note": "Ayurveda is supportive, not a substitute for emergency cardiac care. Always follow modern cardiologist advice for serious conditions."
    },
    {
      "category": "EyeSight",
      "title": "Dry Eyes",
      "plant" : "N/A",
      "bestRemedy": {
        "title": "Triphala Ghee",
        "preparation": "Mix Triphala powder with warm ghee",
        "usage": "1 tsp at bedtime with milk",
        "benefit": "Lubricates eyes and nourishes nerves"
      }
    },
    {
      "category": "EyeSight",
      "title": "Conjunctivitis",
      "plant" : "N/A",
      "bestRemedy": {
        "title": "Triphala Eye Wash",
        "preparation": "Soak 1 tsp Triphala in water overnight",
        "usage": "Strain and wash eyes twice daily",
        "benefit": "Reduces infection and redness"
      }
    },
    {
     "category": "EyeSight",
       "title": "Vision Problems",
       "plant" : "N/A",
       "bestRemedy": {
         "title": "Triphala Ghrita",
         "preparation": "Medicated ghee preparation",
         "usage": "1 tsp daily with warm milk",
         "benefit": "Strengthens eyesight gradually"
        }
    },
  {
    "category": "Tumors",
    "title": "Important Note About Tumor Treatment",
    "plant" : "N/A",
    "note": "Please consult an oncologist + certified Ayurvedic doctor..."
  },
  {
    "category": "Cancer", 
    "title": "Important Note About Cancer Treatment",
    "plant" : "N/A",
    "note": "Please consult an oncologist + certified Ayurvedic doctor..."
  }
]);

console.log("✅ Remedies inserted successfully");
process.exit();