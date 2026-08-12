import { useState } from "react";

function App() {
  const getInitialArray = () => {
    const randomNumsArray = [];
    for (let i = 0; i <= 10; i++) {
      randomNumsArray.push(Math.random() * 100);
    }

    return randomNumsArray;
  };

  const [nums, setNums] = useState(getInitialArray);

  return (
    <>
      <ul>
        {nums.map((num) => {
          return <li>{num}</li>;
        })}
      </ul>

      <button
        onClick={() =>
          setNums((prevState) => [...prevState, Math.random() * 100])
        }
      >
        Add Random Number
      </button>
    </>
  );
}

export default App;
