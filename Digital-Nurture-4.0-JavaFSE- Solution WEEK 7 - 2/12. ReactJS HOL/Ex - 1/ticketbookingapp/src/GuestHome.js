import React from 'react';

function GuestHome() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <h3>Available Flights</h3>
      <ul>
        <li>Flight 101: New York to London - $500</li>
        <li>Flight 202: Paris to Tokyo - $850</li>
        <li>Flight 303: Sydney to Los Angeles - $700</li>
      </ul>
      <p>Please login to book tickets.</p>
    </div>
  );
}

export default GuestHome;