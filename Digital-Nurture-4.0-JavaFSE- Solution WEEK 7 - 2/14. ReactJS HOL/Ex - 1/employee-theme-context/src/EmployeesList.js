import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Frontend Developer' },
    { id: 2, name: 'Jane Smith', position: 'Backend Developer' },
    { id: 3, name: 'Mike Johnson', position: 'UI/UX Designer' }
  ];

  return (
    <div className="employees-list">
      <h2>Employee List</h2>
      {employees.map(employee => (
        <EmployeeCard 
          key={employee.id} 
          name={employee.name} 
          position={employee.position} 
        />
      ))}
    </div>
  );
}

export default EmployeesList;