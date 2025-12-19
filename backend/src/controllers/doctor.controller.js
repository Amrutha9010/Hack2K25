import Doctor from "../models/Doctor.model.js";

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
    const doctors = await Doctor.find({
      city,
      specialization: {
        $regex: new RegExp(`^${specialization}$`, "i")
      }
    }).populate("hospitalId", "name");

    res.json(doctors);
  } catch (error) {
    console.error("GET DOCTORS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
