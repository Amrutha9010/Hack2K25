import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const popupRef = useRef(null);

  // User State
  const [user, setUser] = useState(null);

  // Edit Form State
  const [editForm, setEditForm] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Load user from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setEditForm(parsedUser);
      } catch (e) {
        console.error("Failed to parse user profile", e);
      }
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(); // Ensure clean state
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/v1/auth/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      const data = await response.json();

      if (response.ok) {
        // Update local storage and state
        const updatedUser = data.data.user;
        localStorage.setItem("userProfile", JSON.stringify(updatedUser));
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditOpen(false);
        setIsProfileOpen(false);
        alert("Profile updated successfully!");
      } else {
        alert(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update failed", error);
      alert("Something went wrong");
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) return null; // Don't show navbar if no user (or handle appropriately)

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
          <span>{user.fullName || user.hospitalName || "User"}</span>

          {/* Profile Popup */}
          {isProfileOpen && (
            <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
              <div className="popup-header">
                <span className="user-name">{user.fullName || user.hospitalName}</span>
                <span className="user-email">{user.email}</span>
              </div>

              <div className="popup-details">
                <p><strong>Contact:</strong> {user.contact}</p>
                {user.role === 'patient' && (
                   <>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                   </>
                )}
                {user.role === 'hospital' && (
                   <>
                    <p><strong>City:</strong> {user.city}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                   </>
                )}
              </div>

              <div className="popup-item" onClick={() => setIsEditOpen(true)}>
                <svg className="icon" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Edit Profile
              </div>

              <div className="popup-item logout" onClick={handleLogout}>
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

      {/* Edit Profile Modal */}
      {isEditOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSaveProfile}>
              
              <div className="form-group">
                <label>Email (Cannot change)</label>
                <input type="text" value={editForm.email} disabled className="disabled-input" />
              </div>

              {user.role === 'patient' ? (
                <>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      name="fullName" 
                      value={editForm.fullName || ''} 
                      onChange={handleEditChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input 
                      name="age" 
                      type="number"
                      value={editForm.age || ''} 
                      onChange={handleEditChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" value={editForm.gender || ''} onChange={handleEditChange}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>Hospital Name</label>
                    <input 
                      name="hospitalName" 
                      value={editForm.hospitalName || ''} 
                      onChange={handleEditChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input 
                      name="city" 
                      value={editForm.city || ''} 
                      onChange={handleEditChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Pincode</label>
                    <input 
                      name="pincode" 
                      value={editForm.pincode || ''} 
                      onChange={handleEditChange} 
                    />
                  </div>
                   <div className="form-group">
                    <label>Address</label>
                    <textarea 
                      name="address" 
                      value={editForm.address || ''} 
                      onChange={handleEditChange} 
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Contact Number</label>
                <input 
                  name="contact" 
                  value={editForm.contact || ''} 
                  onChange={handleEditChange} 
                />
              </div>

              <div className="modal-actions">
                <button type="button" onClick={() => setIsEditOpen(false)} className="btn-cancel">Cancel</button>
                <button type="submit" disabled={isSaving} className="btn-save">
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;