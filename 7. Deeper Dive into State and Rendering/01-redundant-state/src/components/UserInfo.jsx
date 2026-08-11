import React, { useState } from "react";
import DisplayFullName from "./DisplayFullName";

function UserInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  const fullName = `${firstName} ${lastName}`;

  return (
    <form>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            // setFullName(e.target.value + " " + lastName);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            // setFullName(firstName + " " + e.target.value);
          }}
        />
      </div>

      <h1>User Details</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <DisplayFullName fullName={fullName} />
    </form>
  );
}

export default UserInfo;
