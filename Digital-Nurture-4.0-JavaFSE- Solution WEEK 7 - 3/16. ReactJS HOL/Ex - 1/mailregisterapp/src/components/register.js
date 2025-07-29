import React, { useState } from 'react';

const Register = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for field errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation (at least 5 characters)
    if (formData.name.length < 5) {
      newErrors.name = 'Name must be at least 5 characters';
      valid = false;
    }

    // Email validation (must contain @ and .)
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Email must contain @ and .';
      valid = false;
    }

    // Password validation (at least 8 characters)
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, proceed with submission
      alert('Form submitted successfully!');
      console.log('Form data:', formData);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;