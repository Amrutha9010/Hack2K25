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



  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        console.log(`Fetching doctors for City: ${selectedCity}, Problem: ${selectedProblem}`);
        const url = `http://localhost:5000/api/doctors?city=${selectedCity}&problem=${selectedProblem}`;
        console.log("Request URL:", url);

        const response = await fetch(url);
        console.log("Response status:", response.status);
        
        if (!response.ok) {
           throw new Error(`Failed to fetch doctors: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Raw API Data:", data);

        
        // Transform data to match UI needs
        const formattedDoctors = data.map(doc => ({
            id: doc._id,
            name: doc.name,
            specialty: doc.specialization,
            rating: doc.rating,
            reviews: Math.floor(Math.random() * 300) + 50, // Mock reviews
            clinic: (doc.hospitalId && doc.hospitalId.name) ? doc.hospitalId.name : "Private Clinic",
            distance: (Math.random() * 5 + 1).toFixed(1) + " km", // Mock distance
            experience: `${doc.experience} years`,
            fees: `₹${doc.fees}`,
            avatarColor: ['#1E40AF', '#0D9488', '#FB7185', '#D97706'][Math.floor(Math.random() * 4)]
        }));

        setDoctors(formattedDoctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        // Fallback or empty state could be handled here
      } finally {
        setLoading(false);
      }
    };

    if (selectedCity && selectedProblem) {
      fetchDoctors();
    }
  }, [selectedCity, selectedProblem]);

  const handleBookSlot = (doctorId) => {
    // Pass data to mode selection
    const doc = doctors.find((d) => d.id === doctorId);
    onNext({
      doctorId,
      doctorInfo: {
        name: doc?.name,
        clinic: doc?.clinic,
        specialty: doc?.specialty,
        rating: doc?.rating,
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
            {/* Avatar Section */}
            <div
              className="doctor-avatar"
              style={{ backgroundColor: doctor.avatarColor }}
            >
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Content Section */}
            <div className="doctor-card-content">
              <div className="doctor-card-header">
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <span className="specialty">{doctor.specialty}</span>
                </div>
                <div className="rating">
                  <span className="stars">⭐ {doctor.rating}</span>
                  <span className="reviews">({doctor.reviews} reviews)</span>
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
            </div>

            {/* Actions Section */}
            <div className="doctor-actions">
              <button
                className="book-slot-btn"
                onClick={() => handleBookSlot(doctor.id)}
              >
                Book Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDoctors;
