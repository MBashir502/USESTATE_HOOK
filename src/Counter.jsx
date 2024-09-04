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
      <h1 style={{textAlign:"center", marginTop:"100px"}}>My Counter App</h1>

      <div className="container">
        <h1>{counter}</h1>
        <button style={{ marginLeft: "515px" }} onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
