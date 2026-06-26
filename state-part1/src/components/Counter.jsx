import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    // setCounter(counter + 1);

    // setCounter((previousState) => {
    //   return previousState + 1;
    // });

    setCounter((previousState) => previousState + 1);
  };

  const handleDecrease = () => { n
    if (counter <= 0) {
      alert("Error");
    } else {
      // setCounter(counter - 1);

      // setCounter((previousState) => {
      //   return previousState - 1;
      // });

      setCounter((previousState) => previousState - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <div className="counter-wrapper">
        <button className="decrease-btn" onClick={handleDecrease}>
          -
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
        <button className="increase-btn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
