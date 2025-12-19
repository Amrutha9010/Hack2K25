import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Services</h3>
                    <span className="footer-link">Symptom Checker</span>
                    <span className="footer-link">Virtual Consultation</span>
                    <span className="footer-link">Health Tracking</span>
                    <span className="footer-link">Emergency Support</span>
                </div>

                <div className="footer-column">
                    <h3>Resources</h3>
                    <span className="footer-link">Medical Blog</span>
                    <span className="footer-link">Community Forum</span>
                    <span className="footer-link">Help Center</span>
                    <span className="footer-link">Privacy Policy</span>
                </div>

                <div className="footer-column">
                    <h3>Company</h3>
                    <span className="footer-link">About Medisense</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Newsroom</span>
                    <span className="footer-link">Contact Us</span>
                </div>

                <div className="footer-column">
                    <h3>Connect</h3>
                    <span className="footer-link">Twitter / X</span>
                    <span className="footer-link">Instagram</span>
                    <span className="footer-link">LinkedIn</span>
                    <span className="footer-link">Support</span>
                </div>
            </div>

            <div className="footer-bottom">
                <div>
                    Copyright © {new Date().getFullYear()} <span className="footer-brand-text">Medisense 360</span>. All rights reserved.
                </div>
                <div>
                    <span className="footer-link" style={{ marginRight: '15px' }}>Privacy Policy</span>
                    <span className="footer-link">Terms of Use</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;