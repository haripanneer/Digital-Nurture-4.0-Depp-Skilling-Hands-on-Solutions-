import React, { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Employee Management System</h1>
        <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
          Toggle Theme (Current: {theme})
        </button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;