import React from 'react';

function UserHome() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <h3>Book Your Flight</h3>
      <form>
        <div>
          <label>Select Flight: </label>
          <select>
            <option>Flight 101: New York to London - $500</option>
            <option>Flight 202: Paris to Tokyo - $850</option>
            <option>Flight 303: Sydney to Los Angeles - $700</option>
          </select>
        </div>
        <div>
          <label>Passenger Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Date: </label>
          <input type="date" />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default UserHome;