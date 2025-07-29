import React, { useState } from 'react';
import './App.css';
import GuestHome from './GuestHome';
import UserHome from './UserHome';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Flight Ticket Booking System</h1>
      <div className="auth-section">
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogout} />
        ) : (
          <LoginButton onClick={handleLogin} />
        )}
      </div>
      
      {isLoggedIn ? <UserHome /> : <GuestHome />}
    </div>
  );
}

export default App;