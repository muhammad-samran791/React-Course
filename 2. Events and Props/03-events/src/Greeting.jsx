import React from "react";

function Greeting({ handleClick }) {
  return (
    <h1 className="greeting" onClick={handleClick}>
      Muhammad Samran
    </h1>
  );
}

export default Greeting;
