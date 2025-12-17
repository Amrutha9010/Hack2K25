import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About HealthConnect</h2>
          <div className="title-line"></div>
          <p>Revolutionizing healthcare through technology and compassion</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At HealthConnect, we believe that access to quality healthcare should be a fundamental right, not a privilege. 
              Our mission is to bridge the gap between patients and healthcare providers.
            </p>
            
            <h3>Our Vision</h3>
            <p>
              We envision a world where every individual can access reliable healthcare guidance within minutes.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Meet Our Team</h3>
          <div className="team-grid">
            {[
              {name: 'Dr. Arjun Sharma', role: 'Chief Medical Officer'},
              {name: 'Priya Patel', role: 'Head of Technology'},
              {name: 'Rohan Mehta', role: 'Product Director'},
              {name: 'Dr. Ananya Reddy', role: 'Clinical Advisor'}
            ].map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <div className="avatar-placeholder">
                    <i className="fas fa-user-md"></i>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;