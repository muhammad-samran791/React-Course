import React from "react";
import User from "./User";

function Users({ user, increaseAge, deleteUser }) {
  return <User {...user} increaseAge={increaseAge} deleteUser={deleteUser} />;
}

export default Users;
