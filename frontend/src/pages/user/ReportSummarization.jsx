import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './ReportSummarization.css'; // We will create this

const ReportSummarization = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
    setSummary('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/reports/summarize', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to summarize report');
      }

      setSummary(data.summary);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-page">
      <Navbar />
      <div className="report-container">
        <div className="report-card">
          <h2>Medical Report Summarizer</h2>
          <p className="subtitle">Upload your medical report (PDF) to get a simple, easy-to-understand summary.</p>
          
          <form onSubmit={handleUpload} className="upload-form">
            <div className="file-input-wrapper">
              <input 
                type="file" 
                accept="application/pdf"
                onChange={handleFileChange}
                id="file-upload"
              />
              <label htmlFor="file-upload" className="file-label">
                {file ? file.name : "Choose PDF Report"}
              </label>
            </div>

            <button type="submit" className="btn-summarize" disabled={loading || !file}>
              {loading ? 'Analyzing...' : 'Summarize Report'}
            </button>
          </form>

          {error && <div className="error-message">{error}</div>}

          {summary && (
            <div className="summary-result">
              <h3>Summary</h3>
              <div className="summary-content">
                {summary.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          )}
          
          <button className="btn-back" onClick={() => navigate('/home')}>
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportSummarization;
