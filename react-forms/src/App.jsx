import { use, useState } from "react";

function App() {
  const [username, setuUername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleUsername = (e) => {
    setuUername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedName(username);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{submittedName}</p>
    </>
  );
}

export default App;
