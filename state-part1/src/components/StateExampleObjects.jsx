import React, { use, useState } from "react";
import { v4 as uuid } from "uuid";

const displayUsers = {
  firstName: "Muhammad",
  lastName: "Samran",
  email: "abc@gmail.com",
  phone: 123456789,
  age: 19,
};

function StateExampleObjects() {
  const [users, setUsers] = useState(displayUsers);

  const icreaseAge = () => {
    setUsers((prevState) => ({ ...prevState, age: (prevState.age += 1) }));
  };

  return (
    <>
      <p>firstName: {users.firstName}</p>
      <p>lastName: {users.lastName}</p>
      <p>email: {users.email}</p>
      <p>phone: {users.phone}</p>
      <p>age: {users.age}</p>
      <button onClick={icreaseAge}>Icrease Age</button>
    </>
  );
}

export default StateExampleObjects;
