import { useState } from "react";

function App() {
  // const state = useState("Veritas");
  // const firstName = state[0];
  // const setFirstName = state[1];

  const [firstName, setFirstName] = useState("Veritas");

  const handleChangeName = () => {
    if (firstName === "Veritas") {
      setFirstName("Samran");
    } else {
      setFirstName("Veritas");
    }
  };

  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={handleChangeName}>Change Name</button>
    </>
  );
}

export default App;
