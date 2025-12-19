import { useState, useEffect } from 'react'
import './Home.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      id: 1,
      title: 'Home Remedies',
      icon: '🏠',
      description: 'Natural healing solutions',
      color: '#5EEAD4'
    },
    {
      id: 2,
      title: 'AI Chatbot',
      icon: '💬',
      description: 'Instant health assistance',
      color: '#14B8A6'
    },
    {
      id: 3,
      title: 'Medicine Store',
      icon: '💊',
      description: 'Order medicines online',
      color: '#0D9488'
    },
    {
      id: 4,
      title: 'Report Analysis',
      icon: '📋',
      description: 'Understand your reports',
      color: '#5EEAD4'
    },
    {
      id: 5,
      title: 'Book Appointment',
      icon: '📅',
      description: 'Connect with doctors',
      color: '#14B8A6'
    }
  ]

  const handleSOSClick = () => {
    alert('Emergency services contacted! Help is on the way.')
  }

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-icon">⚕️</span>
          <span className="logo-text">MediSense 360</span>
        </div>
        <ul className="nav-links">
          {/* <li><a href="#home" className="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li> */}
        </ul>
        <button className="nav-cta">ChatBot</button>
      </nav>

      <main className="hero-section">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        <div className={`features-circle ${isVisible ? 'visible' : ''}`}>
          <div className="center-circle">
            <h1 className="brand-name">HealthCare</h1>
            <h2 className="brand-number">360</h2>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-item feature-${index + 1}`}
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-circle">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <div className="feature-tooltip">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="tagline">Your Holistic Health Companion</h3>

        <div className="info-cards">
          <div className="info-card">
            <div className="card-icon">🏥</div>
            <h4>Find Hospitals</h4>
            <p>Locate nearby healthcare facilities instantly</p>
          </div>
          <div className="info-card">
            <div className="card-icon">👨‍⚕️</div>
            <h4>Video Consultation</h4>
            <p>Connect with doctors from anywhere</p>
          </div>
          <div className="info-card">
            <div className="card-icon">💉</div>
            <h4>Tablet Recognition</h4>
            <p>Identify medicines by scanning photos</p>
          </div>
        </div>
      </main>

      <button className="sos-button" onClick={handleSOSClick}>
        <span className="sos-pulse"></span>
        <span className="sos-text">SOS</span>
      </button>
    </div>
  )
}

export default App
