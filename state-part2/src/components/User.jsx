import React from "react";

function User({ id, firstName, lastName, age, increaseAge, deleteUser }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => increaseAge(id)}>Increase Age</button>
      </td>
      <td>
        <button onClick={() => deleteUser(id)}>Delete User</button>
      </td>
    </tr>
  );
}

export default User;
