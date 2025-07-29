import React from 'react';

function SyntheticEvent() {
  const handleClick = (e) => {
    // e is the synthetic event
    e.preventDefault();
    alert('I was clicked');
  };

  return (
    <div>
      <h2>Synthetic Event Example</h2>
      <button onClick={handleClick}>Click Me (Synthetic Event)</button>
    </div>
  );
}

export default SyntheticEvent;