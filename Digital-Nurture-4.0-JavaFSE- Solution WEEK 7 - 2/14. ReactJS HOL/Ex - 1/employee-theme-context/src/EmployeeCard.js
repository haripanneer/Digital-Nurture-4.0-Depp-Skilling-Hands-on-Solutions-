import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ name, position }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`employee-card ${theme}`}>
      <h3>{name}</h3>
      <p>{position}</p>
      <div className="actions">
        <button className={`action-btn ${theme}`}>View Details</button>
        <button className={`action-btn ${theme}`}>Edit</button>
        <button className={`action-btn ${theme}`}>Delete</button>
      </div>
    </div>
  );
}

export default EmployeeCard;