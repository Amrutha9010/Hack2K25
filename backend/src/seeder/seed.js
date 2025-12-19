import mongoose from "mongoose";
import dotenv from "dotenv";

import Hospital from "../models/Hospital.model.js";
import Doctor from "../models/Doctor.model.js";
import Slot from "../models/Slot.model.js";

dotenv.config();
console.log("SEEDING INTO 👉", process.env.MONGO_URI);

/* ===============================
   CONNECT DB
================================ */
const connectDB = async () => {
  console.log("SEEDER DB URI 👉", process.env.MONGO_URI); // 🔥 ADD THIS
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB connected for seeding");
};


/* ===============================
   HOSPITALS (BHIMAVARAM)
================================ */
const seedHospitals = async () => {
  await Hospital.deleteMany();

  const hospitals = await Hospital.insertMany([
    { name: "Sri Aditya Multi Speciality Hospital", city: "bhimavaram" },
    { name: "Anjali Hospital", city: "bhimavaram" },
    { name: "Vijaya Super Speciality Hospital", city: "bhimavaram" },
    { name: "Government Area Hospital", city: "bhimavaram" },
    { name: "Sree Ramadevi Neuro Hospital", city: "bhimavaram" }
  ]);

  console.log("🏥 Hospitals seeded");
  return hospitals;
};

/* ===============================
   DOCTORS
================================ */
const seedDoctors = async (hospitals) => {
  await Doctor.deleteMany();

  const doctors = await Doctor.insertMany([
    {
      name: "Dr. Suresh Rao",
      specialization: "General Physician",
      hospitalId: hospitals[0]._id,
      city: "bhimavaram",
      experience: 15,
      fees: 500,
      rating: 4.6
    },
    {
      name: "Dr. Lakshmi Devi",
      specialization: "Gynecologist",
      hospitalId: hospitals[1]._id,
      city: "bhimavaram",
      experience: 12,
      fees: 700,
      rating: 4.7
    },
    {
      name: "Dr. Ravi Teja",
      specialization: "Orthopedist",
      hospitalId: hospitals[2]._id,
      city: "bhimavaram",
      experience: 10,
      fees: 600,
      rating: 4.5
    },
    {
      name: "Dr. Anitha Kumari",
      specialization: "Dermatologist",
      hospitalId: hospitals[0]._id,
      city: "bhimavaram",
      experience: 8,
      fees: 650,
      rating: 4.4
    },
    {
      name: "Dr. Kiran Prasad",
      specialization: "Neurologist",
      hospitalId: hospitals[4]._id,
      city: "bhimavaram",
      experience: 18,
      fees: 1000,
      rating: 4.8
    },
    {
      name: "Dr. Naveen Kumar",
      specialization: "Pediatrician",
      hospitalId: hospitals[3]._id,
      city: "bhimavaram",
      experience: 9,
      fees: 500,
      rating: 4.5
    }
  ]);

  console.log("👨‍⚕️ Doctors seeded");
  return doctors;
};

/* ===============================
   SLOTS
================================ */
const seedSlots = async (doctors) => {
  await Slot.deleteMany();

  const slots = [];

  doctors.forEach((doctor) => {
    [
      "9:00 AM",
      "10:30 AM",
      "1:00 PM",
      "4:00 PM",
      "6:30 PM"
    ].forEach((time) => {
      slots.push({
        doctorId: doctor._id,
        date: "2025-12-20",
        time,
        period: time.includes("AM")
          ? "morning"
          : time.includes("1")
          ? "afternoon"
          : "evening",
        isBooked: false
      });
    });
  });

  await Slot.insertMany(slots);
  console.log("⏰ Slots seeded");
};

/* ===============================
   RUN SEEDER
================================ */
const runSeeder = async () => {
  try {
    await connectDB();

    const hospitals = await seedHospitals();
    const doctors = await seedDoctors(hospitals);
    await seedSlots(doctors);

    console.log("🌱 Seeding completed successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

runSeeder();
