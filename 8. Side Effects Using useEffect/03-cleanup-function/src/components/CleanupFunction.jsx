import React, { useEffect } from "react";
import { useState } from "react";

function CleanupFunction() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect Function");
    return () => {
      console.log("Cleanup Function");
    };
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increase
      </button>
    </div>
  );
}

export default CleanupFunction;
