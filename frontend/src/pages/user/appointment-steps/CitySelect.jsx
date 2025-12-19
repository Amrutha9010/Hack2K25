// /pages/user/appointment-steps/CitySelect.jsx
import React, { useState } from 'react';
import './CitySelect.css';

const CitySelect = ({ onNext, selectedProblem }) => {
  const [selectedCity, setSelectedCity] = useState('');
  
  const cities = [
    { id: 'hyderabad', name: 'Hyderabad', emoji: '🏙️' },
    { id: 'bangalore', name: 'Bangalore', emoji: '🌆' },
    { id: 'mumbai', name: 'Mumbai', emoji: '🌃' },
    { id: 'delhi', name: 'Delhi', emoji: '🏛️' },
    { id: 'chennai', name: 'Chennai', emoji: '🌊' }
  ];

  const handleNext = () => {
    if (selectedCity) {
      onNext(selectedCity);
    }
  };

  return (
    <div className="city-select-container">
      <div className="city-header">
        <h1>📍 Select your city</h1>
        <p>Find specialists near you</p>
      </div>

      <div className="cities-grid">
        {cities.map((city) => (
          <div
            key={city.id}
            className={`city-card ${selectedCity === city.id ? 'selected' : ''}`}
            onClick={() => setSelectedCity(city.id)}
          >
            <div className="city-emoji">{city.emoji}</div>
            <div className="city-name">{city.name}</div>
          </div>
        ))}
      </div>

      <button 
        className={`next-btn ${selectedCity ? 'active' : ''}`}
        onClick={handleNext}
        disabled={!selectedCity}
      >
        Find Specialists
      </button>
    </div>
  );
};

export default CitySelect;