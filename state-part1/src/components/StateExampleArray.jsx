import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function StateExampleArray() {
  const [fruits, setFruits] = useState(["Apple", "banana"]);

  const addFruit = () => {
    setFruits((prevState) => {
      return [...prevState, "Mango"];
    });
  };

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={uuid()}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </>
  );
}

export default StateExampleArray;
