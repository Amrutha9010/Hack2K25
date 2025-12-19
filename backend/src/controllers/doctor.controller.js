import Doctor from "../models/Doctor.model.js";
import "../models/Hospital.model.js"; // Ensure Model is registered

const problemMap = {
  fever: "General Physician",
  skin: "Dermatologist",
  headache: "Neurologist",
  stomach: "Gastroenterologist",
  back: "Orthopedist",
  anxiety: "Psychiatrist",
  eye: "Ophthalmologist"
};

export const getDoctors = async (req, res) => {
  try {
    let { city, problem } = req.query;

    // ✅ CASE 1: No filters → return all doctors (for testing)
    if (!city && !problem) {
      const doctors = await Doctor.find({}).populate(
        "hospitalId",
        "name"
      );
      return res.json(doctors);
    }

    // ❌ Invalid request
    if (!city || !problem) {
      return res
        .status(400)
        .json({ message: "city and problem are required" });
    }

    // ✅ Normalize input
    city = city.toLowerCase().trim();
    const specialization = problemMap[problem];

    if (!specialization) {
      return res.status(400).json({ message: "Invalid problem type" });
    }

    // ✅ Flexible + safe search
    console.log(`Searching for: City=${city}, Specialization=${specialization}`);
    
    // Check if regex is valid
    const regex = new RegExp(`^${specialization}$`, "i");
    console.log('Regex:', regex);

    const doctors = await Doctor.find({
      city,
      specialization: regex
    }).populate("hospitalId", "name");
    
    console.log(`Found ${doctors.length} doctors`);

    res.json(doctors);
  } catch (error) {
    console.error("GET DOCTORS ERROR FULL:", error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
