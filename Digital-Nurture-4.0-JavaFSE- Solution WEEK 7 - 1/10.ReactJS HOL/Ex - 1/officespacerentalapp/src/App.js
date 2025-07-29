import React from 'react';
import image from './image/office.jpeg'
function App() {
  // Step 1: Create Heading
  const heading = <h1>Office Space Rental App</h1>;

  

  // Step 3: Office Object
  const office = {
    name: "Prime Co-Working Space",
    rent: 55000,
    address: "4th Floor, Business Hub, Bangalore"
  };

  // Step 4: List of Office Objects
  const offices = [
    { id: 1, name: "Urban Office", rent: 45000, address: "MG Road, Bengaluru" },
    { id: 2, name: "SpaceHub", rent: 75000, address: "Banjara Hills, Hyderabad" },
    { id: 3, name: "SkyView Desk", rent: 60000, address: "Sector 62, Noida" },
    { id: 4, name: "GreenBay Offices", rent: 30000, address: "Anna Nagar, Chennai" },
  ];

  // Style function
  const getRentStyle = (rent) => ({
    color: rent < 60000 ? "red" : "green"
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img src={image} alt="Office Space" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />

      <h2>Single Office Detail:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>List of Offices</h2>
      <ul>
        {offices.map((o) => (
          <li key={o.id} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {o.name}</p>
            <p><strong>Rent:</strong> <span style={getRentStyle(o.rent)}>{o.rent}</span></p>
            <p><strong>Address:</strong> {o.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
