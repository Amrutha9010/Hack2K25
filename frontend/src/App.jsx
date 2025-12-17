import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import AppointmentBooking from './pages/user/AppointmentBooking';
import BookingConfirmation from './pages/user/BookingConfirmation';
import AppointmentList from './pages/user/AppointmentList';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import AppointmentManagement from './pages/doctor/AppointmentManagement';
import VideoConsultation from './pages/doctor/VideoConsultation';
import './App.css';

function App() {
  const [userRole, setUserRole] = useState('patient');
  const [currentPage, setCurrentPage] = useState('home'); // Changed default to 'home'
  const [bookingData, setBookingData] = useState(null);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const handleBookingSuccess = (data) => {
    setBookingData(data);
    setCurrentPage('confirmation');
  };

  const handleViewAppointments = () => {
    setCurrentPage('list');
  };

  const handleBackToBooking = () => {
    setCurrentPage('booking');
  };

  const handleSwitchRole = (role) => {
    setUserRole(role);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserRole('patient');
    setCurrentPage('home'); // Changed to 'home'
  };

  const handleManageAppointment = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setCurrentPage('management');
  };

  const handleStartConsultation = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setCurrentPage('consultation');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleNavigateToBooking = () => {
    setCurrentPage('booking');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
  };

  // Render landing page components
  const renderLandingPage = () => (
    <>
      <Header onNavigateToBooking={handleNavigateToBooking} />
      <Hero onGetStarted={handleNavigateToBooking} />
      <Features />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating action buttons */}
      <div className="floating-buttons">
        <button 
          className="floating-btn chat-btn"
          onClick={() => setCurrentPage('booking')}
        >
          <i className="fas fa-calendar-check"></i>
          <span className="tooltip">Book Appointment</span>
        </button>
        <button className="floating-btn emergency-btn">
          <i className="fas fa-ambulance"></i>
          <span className="tooltip">Emergency</span>
        </button>
        <button className="floating-btn scan-btn">
          <i className="fas fa-camera"></i>
          <span className="tooltip">Scan Tablet</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="app-container">
      {currentPage === 'home' ? (
        renderLandingPage()
      ) : userRole === 'patient' ? (
        <>
          {currentPage === 'booking' && (
            <AppointmentBooking
              onSuccess={handleBookingSuccess}
              onViewAppointments={handleViewAppointments}
              onBackToHome={handleNavigateToHome}
            />
          )}
          {currentPage === 'confirmation' && (
            <BookingConfirmation
              bookingData={bookingData}
              onViewAppointments={handleViewAppointments}
              onBackToBooking={handleBackToBooking}
              onBackToHome={handleNavigateToHome}
            />
          )}
          {currentPage === 'list' && (
            <AppointmentList
              onBackToBooking={handleBackToBooking}
              onBackToHome={handleNavigateToHome}
            />
          )}
        </>
      ) : (
        <>
          {currentPage === 'dashboard' && (
            <DoctorDashboard
              onLogout={handleLogout}
              onBackToHome={handleNavigateToHome}
            />
          )}
          {currentPage === 'management' && (
            <AppointmentManagement
              appointmentId={selectedAppointmentId}
              onBack={handleBackToDashboard}
              onBackToHome={handleNavigateToHome}
            />
          )}
          {currentPage === 'consultation' && (
            <VideoConsultation
              appointmentId={selectedAppointmentId}
              onBack={handleBackToDashboard}
              onBackToHome={handleNavigateToHome}
            />
          )}
        </>
      )}

      {/* Role switcher button - Only show on landing page */}
      {currentPage === 'home' && (
        <button
          onClick={() => handleSwitchRole('doctor')}
          className="role-switcher-btn"
        >
          <i className="fas fa-user-md"></i> Doctor Login
        </button>
      )}

      {/* Back to home button - Show on all pages except home */}
      {currentPage !== 'home' && (
        <button
          onClick={handleNavigateToHome}
          className="back-home-btn"
        >
          <i className="fas fa-home"></i> Back to Home
        </button>
      )}
    </div>
  );
}

export default App;