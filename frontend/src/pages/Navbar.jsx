import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const popupRef = useRef(null);

  // Simulated user state
  const user = { name: "Madhav", role: "Premium Member" };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Brand / Logo */}
      <div className="navbar-brand">
        <span className="brand-text">MediSense</span>
        <span className="brand-number">360</span>
      </div>


      {/* Right Side Actions */}
      <div className="navbar-actions">

        {/* Translate Action */}
        <div className="nav-item">
          <svg className="icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>Translate</span>
        </div>

        {/* Profile Action */}
        <div
          className="nav-item"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          ref={popupRef}
        >
          <svg className="icon profile-icon" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>{user.name}</span>

          {/* Profile Popup */}
          {isProfileOpen && (
            <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
              <div className="popup-header">
                <span className="user-name">{user.name}</span>
                {/* <span className="user-role">{user.role}</span> - Removed as per user request */}
              </div>


              <div className="popup-item">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Edit Profile
              </div>

              <div className="popup-item logout">
                <svg className="icon" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Logout
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;