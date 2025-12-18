import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Home Remedies',
    'Appointment Booking',
    'Video Consultation',
    'Medicine Finder',
    'Tablet Recognition',
    'Report Summarization'
  ];

  const company = [
    'About Us',
    'Careers',
    'Blog',
    'Press',
    'Partners',
    'Privacy Policy'
  ];

  const socialLinks = [
    { icon: 'fa-facebook-f', href: '#' },
    { icon: 'fa-twitter', href: '#' },
    { icon: 'fa-instagram', href: '#' },
    { icon: 'fa-linkedin-in', href: '#' },
    { icon: 'fa-youtube', href: '#' }
  ];

  const appStores = [
    { icon: 'fa-google-play', label: 'GET IT ON', title: 'Google Play' },
    { icon: 'fa-apple', label: 'Download on the', title: 'App Store' }
  ];

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--primary)" fillOpacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <i className="fas fa-heartbeat logo-icon"></i>
                <span className="logo-text">Health<span className="logo-highlight">Connect</span></span>
              </div>
              <p className="footer-description">
                Your complete healthcare solution bridging the gap between patients and medical professionals with AI-powered assistance.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.icon.replace('fa-', '')}
                  >
                    <i className={`fab ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      <i className="fas fa-chevron-right link-icon"></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      <i className="fas fa-check-circle link-icon"></i>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Download App</h3>
              <p className="download-text">
                Download our mobile app for better experience and instant healthcare access.
              </p>
              <div className="app-stores">
                {appStores.map((store, index) => (
                  <a key={index} href="#" className="app-store-btn">
                    <i className={`fab ${store.icon}`}></i>
                    <div className="store-text">
                      <span className="store-label">{store.label}</span>
                      <span className="store-title">{store.title}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} HealthConnect. All rights reserved.</p>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="payment-methods">
                <i className="fab fa-cc-visa" title="Visa"></i>
                <i className="fab fa-cc-mastercard" title="Mastercard"></i>
                <i className="fab fa-cc-paypal" title="PayPal"></i>
                <i className="fas fa-university" title="Bank Transfer"></i>
              </div>
              <div className="trust-badges">
                <span className="badge">
                  <i className="fas fa-shield-alt"></i> Secure
                </span>
                <span className="badge">
                  <i className="fas fa-certificate"></i> Certified
                </span>
                <span className="badge">
                  <i className="fas fa-heart"></i> Trusted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;