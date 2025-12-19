// /pages/user/AppointmentBooking.jsx
import React, { useState } from 'react';
import './AppointmentBooking.css';
import ProblemSelect from './appointment-steps/ProblemSelect';
import CitySelect from './appointment-steps/CitySelect';
import SpecialistDoctors from './appointment-steps/SpecialistDoctors';
import SlotSelection from './appointment-steps/SlotSelection';

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedProblem, setSelectedProblem] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState({});

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
    setStep(2);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setStep(3);
  };

    const handleDoctorSelect = (doctorId) => {
    setSelectedDoctor(doctorId);
    setStep(4);  
  };

   const renderStep = () => {
    switch (step) {
      case 1:
        return <ProblemSelect onNext={handleProblemSelect} />;
      case 2:
        return <CitySelect onNext={handleCitySelect} selectedProblem={selectedProblem} />;
      case 3:
        return (
          <SpecialistDoctors 
            onNext={handleDoctorSelect}
            selectedProblem={selectedProblem}
            selectedCity={selectedCity}
          />
        );
      case 4:
        return <SlotSelection selectedDoctor={selectedDoctor} />;
      default:
        return <ProblemSelect onNext={handleProblemSelect} />;
    }
  };


  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Select Problem';
      case 2: return 'Choose Location';
      case 3: return 'Find Specialist';
      case 4: return 'Pick Time Slot';
      default: return 'Book Appointment';
    }
  };

    return (
    <div className="appointment-booking">
      <div className="booking-header">
        <h1>Book Appointment</h1>
        <div className="progress-bar">
          {[1, 2, 3, 4].map((s) => (  // Only 4 steps now!
            <div key={s} className={`step ${s === step ? 'active' : s < step ? 'completed' : ''}`}>
              <div className="step-circle">
                {s < step ? '✓' : s}
              </div>
              <div className="step-label">
                {s === 1 && 'Problem'}
                {s === 2 && 'Location'}
                {s === 3 && 'Doctor'}
                {s === 4 && 'Time'}  {/* No 'Mode' step */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="booking-content">
        {renderStep()}
      </div>
    </div>
  );
};

export default AppointmentBooking;