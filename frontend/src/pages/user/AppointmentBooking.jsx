// /pages/user/AppointmentBooking.jsx
import React, { useState } from 'react';
import './AppointmentBooking.css';
import ProblemSelect from './appointment-steps/ProblemSelect';
import CitySelect from './appointment-steps/CitySelect';
import SpecialistDoctors from './appointment-steps/SpecialistDoctors';
import SlotSelection from './appointment-steps/SlotSelection';

const AppointmentBooking = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [selectedProblem, setSelectedProblem] = useState('');
  const [selectedCity, setSelectedCity] = useState('bhimavaram'); // Default to Bhimavaram
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState({});

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
    setStep(2); // Skip Step 2 (CitySelect) -> Go directly to Doctor Select which is now "Step 2" logically but let's keep component numbering or adjust
  };

  const handleDoctorSelect = (data) => {
    setSelectedDoctor(data.doctorId);
    setDoctorInfo(data.doctorInfo);
    setStep(3);  
  };

   const renderStep = () => {
    switch (step) {
      case 1:
        return <ProblemSelect onNext={handleProblemSelect} />;
      case 2:
        return (
          <SpecialistDoctors 
            onNext={handleDoctorSelect}
            selectedProblem={selectedProblem}
            selectedCity={selectedCity}
          />
        );
      case 3:
        return <SlotSelection selectedDoctor={selectedDoctor} doctorInfo={doctorInfo} onSuccess={onSuccess} />;
      default:
        return <ProblemSelect onNext={handleProblemSelect} />;
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Select Problem';
      case 2: return 'Find Specialist';
      case 3: return 'Pick Time Slot';
      default: return 'Book Appointment';
    }
  };

    return (
    <div className="appointment-booking">
      <div className="booking-header">
        <h1>Book Appointment in Bhimavaram</h1>
        <div className="progress-bar">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`step ${s === step ? 'active' : s < step ? 'completed' : ''}`}>
              <div className="step-circle">
                {s < step ? '✓' : s}
              </div>
              <div className="step-label">
                {s === 1 && 'Problem'}
                {s === 2 && 'Doctor'}
                {s === 3 && 'Time'}
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