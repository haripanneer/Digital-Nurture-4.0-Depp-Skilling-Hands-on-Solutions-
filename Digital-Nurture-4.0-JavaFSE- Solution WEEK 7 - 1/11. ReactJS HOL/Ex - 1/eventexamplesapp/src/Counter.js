import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const handleMultiple = () => {
    increment();
    sayHello();
  };

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={handleMultiple}>Increase (with message)</button>
    </div>
  );
}

export default Counter;