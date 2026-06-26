import React from "react";

function User({ id, firstName, lastName }) {
  return (
    <>
      <h1>
        {id} {firstName} {lastName}
      </h1>
    </>
  );
}

export default User;
