import React, { use } from "react";
import User from "./components/User";

const users = [
  { id: 1, firstName: "Muhammad", lastName: "Samran" },
  { id: 2, firstName: "Kamran", lastName: "Arain" },
  { id: 3, firstName: "Rafay", lastName: "Qureshi" },
];

function App() {
  return (
    <>
      {users.map((user) => {
        // return <User firstName={user.firstName} lastName={user.lastName} />;
        return <User {...user} key={user.id} />;
      })}
    </>
  );
}

export default App;
