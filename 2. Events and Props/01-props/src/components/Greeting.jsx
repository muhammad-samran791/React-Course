import React from "react";

function Greeting({ children, firstName, lastName }) {
  return (
    <>
      {children}
      <h3>
        {firstName} {lastName}
      </h3>
    </>
  );
}

export default Greeting;
