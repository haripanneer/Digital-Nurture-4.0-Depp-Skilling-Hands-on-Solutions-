import React, { useState } from 'react';

function ComplaintRegister() {
  const [formData, setFormData] = useState({
    employeeName: '',
    complaint: ''
  });
  const [referenceNumber, setReferenceNumber] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random reference number
    const refNum = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceNumber(refNum);
    
    // Show alert with reference number
    alert(`Complaint submitted successfully!\nReference Number: ${refNum}`);
    
    // Reset form
    setFormData({
      employeeName: '',
      complaint: ''
    });
  };

  return (
    <div className="complaint-form">
      <h2>Register a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="complaint">Complaint Details:</label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Submit Complaint
        </button>
      </form>
      
      {referenceNumber && (
        <div className="reference-info">
          <p>Your reference number: <strong>{referenceNumber}</strong></p>
          <p>Please keep this number for future reference.</p>
        </div>
      )}
    </div>
  );
}

export default ComplaintRegister;