import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const decrement = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <div>
      <div className="container">
        <h1>My Counter App</h1>
        <h1>{counter}</h1>
        <div className="btn">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
