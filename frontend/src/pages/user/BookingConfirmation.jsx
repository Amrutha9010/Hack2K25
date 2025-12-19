import { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Clock, User, Mail, Phone, Stethoscope, FileText, Download, Send, Video, Link as LinkIcon, Copy } from 'lucide-react';
import './BookingConfirmation.css';

function BookingConfirmation({ bookingData, onViewAppointments, onBackToBooking }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [meetLink, setMeetLink] = useState('');
  const [isVideoConsultation, setIsVideoConsultation] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2
    }));
    setConfettiPieces(pieces);

    // Check if it's a video consultation
    const storedBooking = JSON.parse(localStorage.getItem('lastBooking') || '{}');
    if (storedBooking.consultationType === 'video') {
      setIsVideoConsultation(true);
      // Generate or get Meet link
      if (storedBooking.meetLink) {
        setMeetLink(storedBooking.meetLink);
      } else {
        // Generate new Meet link if not exists
        const generatedLink = `https://meet.google.com/${Math.random().toString(36).substring(2, 10)}-${Math.random().toString(36).substring(2, 6)}`;
        setMeetLink(generatedLink);
        // Save it back
        storedBooking.meetLink = generatedLink;
        localStorage.setItem('lastBooking', JSON.stringify(storedBooking));
      }
    }

    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const content = `
APPOINTMENT CONFIRMATION
========================

Booking ID: ${bookingData._id ? bookingData._id.slice(0, 8).toUpperCase() : 'BK' + Math.floor(100000 + Math.random() * 900000)}
Status: ${bookingData.status ? bookingData.status.toUpperCase() : 'CONFIRMED'}

PATIENT DETAILS
---------------
Name: ${bookingData.patient_name || 'Not specified'}
Email: ${bookingData.patient_email || 'Not specified'}
Phone: ${bookingData.patient_phone || 'Not specified'}

APPOINTMENT DETAILS
------------------
Date: ${bookingData.appointment_date ? new Date(bookingData.appointment_date).toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}) : new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}
Time: ${bookingData.appointment_time || 'Not specified'}
Consultation Type: ${isVideoConsultation ? 'VIDEO CALL' : 'IN-PERSON'}
Department: ${bookingData.department || 'General'}
Doctor: ${bookingData.doctor_name || 'Dr. Not specified'}

${isVideoConsultation ? `
VIDEO CONSULTATION
-----------------
Google Meet Link: ${meetLink}
Meeting Time: ${bookingData.appointment_time || 'As scheduled'}
Instructions:
1. Click the link 5 minutes before appointment
2. Allow camera & microphone access
3. Ensure good internet connection
4. Doctor will join shortly
` : `
CLINIC VISIT
------------
Clinic: ${bookingData.doctor?.clinic || 'Main Hospital'}
Address: ${bookingData.clinic_address || 'Please check SMS for details'}
Instructions:
1. Arrive 15 minutes before appointment
2. Bring valid ID and medical records
3. Check-in at reception
4. Wear mask if required
`}

SYMPTOMS/REASON
--------------
${bookingData.symptoms || 'General consultation'}

${isVideoConsultation ? 'Thank you for choosing telemedicine services!' : 'Thank you for choosing our healthcare services!'}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointment-${bookingData._id ? bookingData._id.slice(0, 8).toUpperCase() : 'NEW'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleSendSMS = () => {
    alert('SMS confirmation sent to ' + (bookingData.patient_phone || 'your phone number'));
  };

  const handleCopyMeetLink = () => {
    if (meetLink) {
      navigator.clipboard.writeText(meetLink);
      alert('Google Meet link copied to clipboard!');
    }
  };

  const handleJoinMeeting = () => {
    if (meetLink) {
      window.open(meetLink, '_blank');
    }
  };

  return (
    <div className="confirmation-container">
      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map(piece => (
            <div
              key={piece.id}
              className="confetti"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="confirmation-content">
        <div className="success-icon-wrapper">
          <div className="success-icon">
            <CheckCircle size={80} />
          </div>
          <div className="success-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>

        <h1 className="confirmation-title">
          {isVideoConsultation ? '🎥 Video Consultation Scheduled!' : '✅ Appointment Confirmed!'}
        </h1>
        <p className="confirmation-subtitle">
          {isVideoConsultation 
            ? 'Your video consultation has been scheduled. Google Meet link is ready.' 
            : 'Your appointment has been successfully booked. We\'ve sent a confirmation to your email.'}
        </p>

        <div className="booking-id-card">
          <span className="booking-id-label">Booking ID</span>
          <span className="booking-id-value">
            {bookingData._id ? bookingData._id.slice(0, 8).toUpperCase() : 'BK' + Math.floor(100000 + Math.random() * 900000)}
          </span>
          <div className={`status-badge ${isVideoConsultation ? 'video-status' : ''}`}>
            <span className="status-dot"></span>
            {isVideoConsultation ? 'Video Call' : (bookingData.status || 'Confirmed')}
          </div>
        </div>

        {/* Consultation Type Badge */}
        <div className="consultation-type-badge">
          <div className={`type-indicator ${isVideoConsultation ? 'video-type' : 'inperson-type'}`}>
            {isVideoConsultation ? (
              <>
                <Video size={18} />
                <span>Video Consultation</span>
              </>
            ) : (
              <>
                <Stethoscope size={18} />
                <span>In-Person Visit</span>
              </>
            )}
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon calendar-icon">
              <Calendar size={24} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Appointment Date</span>
              <span className="detail-value">
                {bookingData.appointment_date ? new Date(bookingData.appointment_date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon clock-icon">
              <Clock size={24} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Time Slot</span>
              <span className="detail-value">{bookingData.appointment_time || '10:00 AM'}</span>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon doctor-icon">
              <Stethoscope size={24} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Doctor</span>
              <span className="detail-value">{bookingData.doctor_name || bookingData.doctor?.name || 'Dr. Not specified'}</span>
              <span className="detail-subdesc">{bookingData.department || 'General Physician'}</span>
            </div>
          </div>

          {isVideoConsultation ? (
            <>
              {/* Video Consultation Details */}
              <div className="detail-card full-width">
                <div className="detail-icon video-icon">
                  <Video size={24} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Video Platform</span>
                  <span className="detail-value">Google Meet</span>
                  <span className="detail-subdesc">Click link to join meeting</span>
                </div>
              </div>

              {/* Google Meet Link Section */}
              <div className="meet-link-section">
                <div className="meet-link-header">
                  <LinkIcon size={20} />
                  <span>Google Meet Link</span>
                </div>
                <div className="meet-link-box">
                  <code className="meet-link">{meetLink}</code>
                  <div className="meet-link-actions">
                    <button onClick={handleCopyMeetLink} className="meet-action-btn copy-btn">
                      <Copy size={16} />
                      Copy
                    </button>
                    <button onClick={handleJoinMeeting} className="meet-action-btn join-btn">
                      <Video size={16} />
                      Join Now
                    </button>
                  </div>
                </div>
                <div className="meet-instructions">
                  <p><strong>Instructions:</strong></p>
                  <ol>
                    <li>Click "Join Now" 5 minutes before your appointment</li>
                    <li>Allow camera & microphone access</li>
                    <li>Ensure good internet connection</li>
                    <li>Doctor will join the meeting shortly</li>
                    <li>Have your medical history ready (if any)</li>
                  </ol>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* In-Person Details */}
              <div className="detail-card">
                <div className="detail-icon patient-icon">
                  <User size={24} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Patient Name</span>
                  <span className="detail-value">{bookingData.patient_name || 'Not specified'}</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon email-icon">
                  <Mail size={24} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{bookingData.patient_email || 'Not specified'}</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon phone-icon">
                  <Phone size={24} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{bookingData.patient_phone || 'Not specified'}</span>
                </div>
              </div>

              {/* Clinic Info for In-Person */}
              <div className="clinic-info">
                <h3>📍 Clinic Information</h3>
                <div className="clinic-details">
                  <p><strong>{bookingData.doctor?.clinic || 'Main Hospital'}</strong></p>
                  <p>{bookingData.clinic_address || '123 Medical Street, Healthcare City'}</p>
                  <p>📞 Reception: (555) 123-4567</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="symptoms-card">
          <div className="symptoms-header">
            <FileText size={20} />
            <span>Symptoms / Reason for Visit</span>
          </div>
          <p className="symptoms-text">{bookingData.symptoms || 'General consultation'}</p>
        </div>

        <div className="action-buttons">
          <button onClick={handleDownload} className="action-btn download-btn">
            <Download size={20} />
            Download Details
          </button>
          <button onClick={handleSendSMS} className="action-btn sms-btn">
            <Send size={20} />
            Send SMS
          </button>
          {isVideoConsultation && (
            <button onClick={handleJoinMeeting} className="action-btn video-btn">
              <Video size={20} />
              Join Meeting
            </button>
          )}
        </div>

        <div className="navigation-buttons">
          <button onClick={onViewAppointments} className="nav-btn primary-btn">
            View All Appointments
          </button>
          <button onClick={onBackToBooking} className="nav-btn secondary-btn">
            Book Another Appointment
          </button>
        </div>

        <div className={`info-box ${isVideoConsultation ? 'video-info' : ''}`}>
          <div className="info-icon">ℹ️</div>
          <div className="info-text">
            <strong>Important:</strong> {
              isVideoConsultation 
                ? 'Please join the meeting 5 minutes before your scheduled time. Ensure good internet connection, proper lighting, and have your medical history ready.'
                : 'Please arrive 15 minutes before your scheduled time. Bring a valid ID and any relevant medical records or previous prescriptions.'
            }
          </div>
        </div>
      </div>

      <div className="decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
}

export default BookingConfirmation;