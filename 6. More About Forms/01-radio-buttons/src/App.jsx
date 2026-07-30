import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <>
      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          checked={gender === "male"}
          onChange={() => {
            setGender("male");
          }}
        />
        <br />
        <label htmlFor="female">FeMale</label>
        <input
          type="radio"
          checked={gender === "female"}
          onChange={() => {
            setGender("female");
          }}
        />
      </div>
    </>
  );
}

export default App;
