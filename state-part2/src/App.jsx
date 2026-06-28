import { useState } from "react";
import Users from "./components/Users";
import "./App.css";

const usersList = [
  { id: 1, firstName: "Muhammad", lastName: "Samran", age: 19 },
  { id: 2, firstName: "Muhammad", lastName: "Kamran", age: 38 },
  { id: 3, firstName: "Muhammad", lastName: "Kashan", age: 35 },
];

function App() {
  const [users, setUsers] = useState(usersList);

  const increaseAge = (id) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (id === user.id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  const deleteUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  // const deleteLastUser = () => {
  //   setUsers((prevState) => prevState.slice(0, -1));
  // };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Increase Age</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Users
              user={user}
              key={user.id}
              increaseAge={increaseAge}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
}

export default App;
