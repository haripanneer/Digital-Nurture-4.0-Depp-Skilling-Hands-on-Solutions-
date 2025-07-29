import React from 'react';

function Welcome() {
  const sayWelcome = (message) => {
    alert(`${message} to our React application!`);
  };

  return (
    <div>
      <h2>Welcome Example</h2>
      <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>
    </div>
  );
}

export default Welcome;