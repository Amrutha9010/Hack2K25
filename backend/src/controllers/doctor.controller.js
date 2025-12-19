import Doctor from "../models/Doctor.model.js";
import Hospital from "../models/Hospital.model.js";

/* -------------------------------
   Problem → Specialization Map
-------------------------------- */
const problemMap = {
  fever: "General Physician",
  skin: "Dermatologist",
  headache: "Neurologist",
  stomach: "Gastroenterologist",
  back: "Orthopedist",
  anxiety: "Psychiatrist",
  eye: "Ophthalmologist"
};

/* -------------------------------
   Distance Calculator (KM)
-------------------------------- */
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

/* =================================================
   POST /api/doctors/nearby
================================================= */
export const getNearbyDoctors = async (req, res) => {
  try {
    const { problem, userLocation } = req.body;

    if (!problem || !userLocation) {
      return res.status(400).json({
        message: "problem and userLocation are required"
      });
    }

    const specialization = problemMap[problem];

    if (!specialization) {
      return res.status(400).json({
        message: "Invalid problem type"
      });
    }

    const { lat, lng } = userLocation;

    // 🔒 City fixed to Bhimavaram
    const hospitals = await Hospital.find({ city: "bhimavaram" });

    const nearbyHospitals = hospitals
      .map((hospital) => {
        const distance = getDistance(
          lat,
          lng,
          hospital.location.lat,
          hospital.location.lng
        );

        return {
          hospital,
          distance
        };
      })
      .filter((h) => h.distance <= 10); // 10 KM radius

    if (nearbyHospitals.length === 0) {
      return res.json([]);
    }

    const hospitalIds = nearbyHospitals.map(
      (h) => h.hospital._id
    );

    const doctors = await Doctor.find({
      hospitalId: { $in: hospitalIds },
      specialization
    }).populate("hospitalId", "name location");

    const response = doctors.map((doc) => {
      const hospitalInfo = nearbyHospitals.find(
        (h) => h.hospital._id.toString() === doc.hospitalId._id.toString()
      );

      return {
        doctorName: doc.name,
        specialization: doc.specialization,
        hospital: doc.hospitalId.name,
        distance: hospitalInfo.distance.toFixed(2) + " km",
        fees: doc.fees,
        rating: doc.rating
      };
    });

    res.json(response);
  } catch (error) {
    console.error("Nearby Doctors Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
