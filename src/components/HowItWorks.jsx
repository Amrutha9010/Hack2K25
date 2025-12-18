import React, { useEffect, useRef } from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const stepRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { number: '01', title: 'Enter Symptoms', description: 'Describe your symptoms in our AI-powered chat interface.' },
    { number: '02', title: 'Get Home Remedies', description: 'Receive personalized home remedy suggestions.' },
    { number: '03', title: 'Track Progress', description: 'Monitor if remedies help or if you need medical attention.' },
    { number: '04', title: 'Find Hospital/Doctor', description: 'Get nearby hospital recommendations or book a doctor appointment.' },
    { number: '05', title: 'Video Consultation', description: 'Connect with doctors via integrated video calls.' },
    { number: '06', title: 'Medicine & Follow-up', description: 'Find medicines and get follow-up reminders.' }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <div className="title-line"></div>
          <p>Your seamless healthcare journey in six simple steps</p>
        </div>
        
        <div className="steps-container">
          <div className="timeline">
            <div className="timeline-line"></div>
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[index] = el}
                className={`step ${index % 2 === 0 ? 'left' : 'right'} slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;