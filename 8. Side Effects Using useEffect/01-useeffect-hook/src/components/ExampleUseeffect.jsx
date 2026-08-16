import { useEffect, useState } from "react";

function ExampleUseeffect() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  console.log("Component Rerender");
  useEffect(() => {
    console.log("Test useEffect");
  }, [counter1, counter2]);
  return (
    <>
      <div>Counter 1: {counter1}</div>
      <button onClick={() => setCounter1(counter1 + 1)}>Increase</button>
      <div>Counter 2: {counter2}</div>
      <button onClick={() => setCounter2(counter2 + 1)}>Increase</button>
    </>
  );
}

export default ExampleUseeffect;
