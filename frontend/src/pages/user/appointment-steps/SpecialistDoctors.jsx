// /pages/user/appointment-steps/SpecialistDoctors.jsx
import React, { useState, useEffect } from "react";
import "./SpecialistDoctors.css";

const SpecialistDoctors = ({ onNext, selectedProblem, selectedCity }) => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  // Map problem to specialist
  const specialistMap = {
    fever: "General Physician",
    skin: "Dermatologist",
    headache: "Neurologist",
    stomach: "Gastroenterologist",
    back: "Orthopedist",
    anxiety: "Psychiatrist",
    eye: "Ophthalmologist",
    other: "General Physician",
  };

  // Mock doctors data
  const mockDoctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 342,
      clinic: "SkinCare Clinic",
      distance: "3.2 km",
      experience: "12 years",
      fees: "₹800",
      avatarColor: "#1E40AF",
    },
    {
      id: 2,
      name: "Dr. Arjun Reddy",
      specialty: "Dermatologist",
      rating: 4.5,
      reviews: 210,
      clinic: "City Skin Hospital",
      distance: "5.1 km",
      experience: "8 years",
      fees: "₹600",
      avatarColor: "#0D9488",
    },
    {
      id: 3,
      name: "Dr. Anjali Mehta",
      specialty: "Dermatologist",
      rating: 4.9,
      reviews: 456,
      clinic: "MediSkin Center",
      distance: "2.8 km",
      experience: "15 years",
      fees: "₹1000",
      avatarColor: "#FB7185",
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setDoctors(mockDoctors);
      setLoading(false);
    }, 1000);
  }, []);

  const handleBookSlot = (doctorId) => {
    // Pass data to mode selection
    onNext({
      doctorId,
      doctorInfo: {
        name: mockDoctors.find((d) => d.id === doctorId)?.name,
        clinic: mockDoctors.find((d) => d.id === doctorId)?.clinic,
        specialty: mockDoctors.find((d) => d.id === doctorId)?.specialty,
        rating: mockDoctors.find((d) => d.id === doctorId)?.rating,
      },
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>
          Finding {specialistMap[selectedProblem]} in {selectedCity}...
        </p>
      </div>
    );
  }

  return (
    <div className="specialist-container">
      <div className="specialist-header">
        <h1>
          👨‍⚕️ {specialistMap[selectedProblem]}s in {selectedCity}
        </h1>
        <p>For: {selectedProblem.replace(/([A-Z])/g, " $1").trim()}</p>
      </div>

      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-header">
              <div
                className="doctor-avatar"
                style={{ backgroundColor: doctor.avatarColor }}
              >
                {doctor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <div className="rating">
                  <span className="stars">⭐ {doctor.rating}</span>
                  <span className="reviews">({doctor.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="doctor-details">
              <div className="detail">
                <span className="icon">🏥</span>
                <span>{doctor.clinic}</span>
              </div>
              <div className="detail">
                <span className="icon">📍</span>
                <span>{doctor.distance} away</span>
              </div>
              <div className="detail">
                <span className="icon">⏳</span>
                <span>{doctor.experience} experience</span>
              </div>
              <div className="detail">
                <span className="icon">💰</span>
                <span>Consultation: {doctor.fees}</span>
              </div>
            </div>

            <button
              className="book-slot-btn"
              onClick={() => handleBookSlot(doctor.id)}
            >
              Book Consultation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDoctors;
