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
    <div className="container">
      <div >
        <h1>{counter}</h1>
        <button style={{marginLeft:"515px"}} onClick={increment}>Increment</button  >
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
