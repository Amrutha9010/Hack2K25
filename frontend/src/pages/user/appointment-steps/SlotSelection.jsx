// /pages/user/appointment-steps/SlotSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SlotSelection.css';

const SlotSelection = ({ selectedDoctor }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [consultationType, setConsultationType] = useState('in-person'); // Default
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const doctorInfo = {
    1: { name: 'Dr. Priya Sharma', clinic: 'SkinCare Clinic' },
    2: { name: 'Dr. Arjun Reddy', clinic: 'City Skin Hospital' },
    3: { name: 'Dr. Anjali Mehta', clinic: 'MediSkin Center' }
  };

  const dates = [
    { id: 'today', label: 'Today', date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) },
    { id: 'tomorrow', label: 'Tomorrow', date: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) },
    { id: 'day3', label: new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString('en-US', { weekday: 'short' }), date: new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }
  ];

  const timeSlots = {
    morning: ['9:00 AM', '10:30 AM', '11:45 AM'],
    afternoon: ['1:00 PM', '2:30 PM', '4:00 PM'],
    evening: ['5:30 PM', '6:45 PM', '8:00 PM']
  };

  const handleSlotSelect = (time) => {
    setSelectedTime(time);
    const dateObj = dates.find(d => d.id === selectedDate);
    setSelectedSlot({
      time,
      date: dateObj.date,
      period: Object.keys(timeSlots).find(key => timeSlots[key].includes(time))
    });
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      const bookingData = {
        doctor: doctorInfo[selectedDoctor],
        slot: selectedSlot,
        consultationType: consultationType,
        bookingId: 'BK' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString()
      };
      
      localStorage.setItem('lastBooking', JSON.stringify(bookingData));
      
      // If video consultation, generate Meet link
      if (consultationType === 'video') {
        const meetLink = `https://meet.google.com/${Math.random().toString(36).substring(2, 10)}`;
        bookingData.meetLink = meetLink;
        localStorage.setItem('lastBooking', JSON.stringify(bookingData));
      }
      
      navigate('/booking-confirmed');
    }
  };

  return (
    <div className="slot-container">
      <div className="slot-header">
        <h1>🗓️ Select Appointment Slot</h1>
        <div className="doctor-info">
          <h2>{doctorInfo[selectedDoctor]?.name}</h2>
          <p>{doctorInfo[selectedDoctor]?.clinic}</p>
        </div>
      </div>

      {/* Step 1: Choose Date */}
      <div className="section">
        <h3>📅 Select Date</h3>
        <div className="dates-grid">
          {dates.map((date) => (
            <button
              key={date.id}
              className={`date-btn ${selectedDate === date.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedDate(date.id);
                setSelectedTime(''); // Reset time when date changes
              }}
            >
              <div className="date-label">{date.label}</div>
              <div className="date-value">{date.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Time Period */}
      <div className="section">
        <h3>⏰ Select Time</h3>
        <div className="time-periods">
          {Object.keys(timeSlots).map((period) => (
            <div key={period} className="period-section">
              <h4>{period.charAt(0).toUpperCase() + period.slice(1)}</h4>
              <div className="time-grid">
                {timeSlots[period].map((time) => (
                  <button
                    key={time}
                    className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleSlotSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3: Choose Consultation Type */}
      <div className="section">
        <h3>🎯 Consultation Type</h3>
        <div className="consultation-type">
          <div 
            className={`type-card ${consultationType === 'in-person' ? 'selected' : ''}`}
            onClick={() => setConsultationType('in-person')}
          >
            <div className="type-icon">🏥</div>
            <h4>In-Person Visit</h4>
            <p>Visit clinic for checkup</p>
            <div className="type-features">
              <span>✓ Physical exam</span>
              <span>✓ Lab tests</span>
            </div>
          </div>
          
          <div 
            className={`type-card video ${consultationType === 'video' ? 'selected' : ''}`}
            onClick={() => setConsultationType('video')}
          >
            <div className="type-icon">📱</div>
            <h4>Video Consultation</h4>
            <p>Google Meet video call</p>
            <div className="type-features">
              <span>✓ Instant link</span>
              <span>✓ No travel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Slot Info */}
      {selectedSlot && (
        <div className="selected-info">
          <h3>Selected Appointment</h3>
          <div className="appointment-details">
            <div className="detail">
              <span>Date:</span>
              <strong>{selectedSlot.date}</strong>
            </div>
            <div className="detail">
              <span>Time:</span>
              <strong>{selectedSlot.time} ({selectedSlot.period})</strong>
            </div>
            <div className="detail">
              <span>Type:</span>
              <strong className={`type-badge ${consultationType}`}>
                {consultationType === 'video' ? '📱 Video Call' : '🏥 In-Person'}
              </strong>
            </div>
            <div className="detail">
              <span>Doctor:</span>
              <strong>{doctorInfo[selectedDoctor]?.name}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Button */}
      <button 
        className={`confirm-btn ${selectedSlot ? 'active' : ''}`}
        onClick={handleConfirm}
        disabled={!selectedSlot}
      >
        {selectedSlot 
          ? `Confirm ${consultationType === 'video' ? 'Video' : 'In-Person'} Appointment` 
          : 'Select a time slot'}
      </button>
    </div>
  );
};

export default SlotSelection;