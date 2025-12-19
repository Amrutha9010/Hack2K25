import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import "./SpecialistDoctors.css";

const SpecialistDoctors = ({ selectedProblem }) => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");

  /* -----------------------------
     Get User Location
  ------------------------------ */
  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation not supported");
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          reject("Location permission denied");
        }
      );
    });
  };

  /* -----------------------------
     Fetch Nearby Doctors
  ------------------------------ */
  const fetchNearbyDoctors = async () => {
    try {
      const userLocation = await getUserLocation();

      const res = await api.post("/doctors/nearby", {
        problem: selectedProblem,
        userLocation
      });

      setDoctors(res.data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch nearby doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNearbyDoctors();
  }, []);

  /* -----------------------------
     UI STATES
  ------------------------------ */
  if (loading) {
    return (
      <div className="loading-container">
        <p>📍 Finding nearby specialists...</p>
      </div>
    );
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (doctors.length === 0) {
    return <p>No nearby doctors found</p>;
  }

  return (
    <div className="specialist-container">
      <h2>Nearby Specialists</h2>

      <div className="doctors-list">
        {doctors.map((doc, index) => (
          <div key={index} className="doctor-card">
            <h3>{doc.doctorName}</h3>
            <p>{doc.specialization}</p>
            <p>🏥 {doc.hospital}</p>
            <p>📍 {doc.distance}</p>
            <p>💰 ₹{doc.fees}</p>
            <p>⭐ {doc.rating}</p>

            <button className="book-slot-btn">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDoctors;
