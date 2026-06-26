import { useState } from "react";
import Greeting from "./Greeting";

const handleClick = () => {
  console.log("Hello World");
};

const handleClick2 = (firstName, lastName) => {
  console.log(firstName, lastName);
};

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* <button onClick={handleClick}>Click Me</button>
      <br /> <br />
      <button
        onClick={() => {
          handleClick2("Samran", "Veritas");
        }}
      >
        Click Me
      </button> */}

      <Greeting clickHere={handleClick} />
    </>
  );
}

export default App;
