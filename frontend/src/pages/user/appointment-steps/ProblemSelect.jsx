// /pages/user/appointment-steps/ProblemSelect.jsx
import React, { useState } from 'react';
import './ProblemSelect.css';

const ProblemSelect = ({ onNext }) => {
  const [selectedProblem, setSelectedProblem] = useState('');
  
  const problems = [
    { id: 'fever', name: 'Fever', emoji: '🤒' },
    { id: 'skin', name: 'Skin Rash', emoji: '🩹' },
    { id: 'headache', name: 'Headache', emoji: '🤕' },
    { id: 'stomach', name: 'Stomach Pain', emoji: '🤢' },
    { id: 'back', name: 'Back Pain', emoji: '💪' },
    { id: 'anxiety', name: 'Anxiety', emoji: '😟' },
    { id: 'eye', name: 'Eye Issue', emoji: '👁️' },
    { id: 'other', name: 'Other', emoji: '📝' }
  ];

  const handleNext = () => {
    if (selectedProblem) {
      onNext(selectedProblem);
    }
  };

  return (
    <div className="problem-select-container">
      <div className="problem-header">
        <h1>🔍 What's bothering you?</h1>
        <p>Select your main concern</p>
      </div>

      <div className="problems-grid">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className={`problem-card ${selectedProblem === problem.id ? 'selected' : ''}`}
            onClick={() => setSelectedProblem(problem.id)}
          >
            <div className="problem-emoji">{problem.emoji}</div>
            <div className="problem-name">{problem.name}</div>
          </div>
        ))}
      </div>

      <button 
        className={`next-btn ${selectedProblem ? 'active' : ''}`}
        onClick={handleNext}
        disabled={!selectedProblem}
      >
        Next: Choose Location
      </button>
    </div>
  );
};

export default ProblemSelect;