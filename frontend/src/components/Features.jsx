import React, { useEffect, useRef } from 'react';
import './Features.css';

function Features() {
  const featureRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'fa-home',
      title: 'Home Remedies',
      description: 'Get accurate home remedies based on your symptoms with step-by-step guidance.',
      color: '#0D9488'
    },
    {
      icon: 'fa-hospital',
      title: 'Hospital Finder',
      description: 'Instantly locate nearby hospitals with real-time availability and directions.',
      color: '#1E40AF'
    },
    {
      icon: 'fa-calendar-check',
      title: 'Appointment Booking',
      description: 'Book doctor appointments with SMS confirmations and automatic reminders.',
      color: '#FB7185'
    },
    {
      icon: 'fa-video',
      title: 'Video Consultations',
      description: 'Seamless video consultations with integrated Google Meet links.',
      color: '#14B8A6'
    },
    {
      icon: 'fa-pills',
      title: 'Medicine Finder',
      description: 'Identify and find medicines across medical stores and e-commerce platforms.',
      color: '#5EEAD4'
    },
    {
      icon: 'fa-tablets',
      title: 'Tablet Recognition',
      description: 'Scan tablet photos to instantly classify them into medical categories.',
      color: '#8B5CF6'
    },
    {
      icon: 'fa-file-medical',
      title: 'Report Summarization',
      description: 'Scan medical reports to get simple, easy-to-understand summaries.',
      color: '#F59E0B'
    },
    {
      icon: 'fa-bell',
      title: 'Remedy Tracking',
      description: 'Track if home remedies helped and get automatic hospital recommendations.',
      color: '#10B981'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Comprehensive Features</h2>
          <div className="title-line"></div>
          <p>Everything you need for a complete healthcare journey in one integrated platform</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="feature-card fade-in"
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <div className="feature-icon" style={{backgroundColor: `${feature.color}15`, color: feature.color}}>
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-dot" style={{backgroundColor: feature.color}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;