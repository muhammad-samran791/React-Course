import { React, useState } from "react";
import ShowCount from "./ShowCount";

function Count() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevState) => {
      return prevState + 3;
    });
  };

  return (
    <>
      <div>
        Count <ShowCount count={count} />
      </div>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default Count;
