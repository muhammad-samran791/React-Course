import { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <Greeting firstName="Muhammad" lastName="Samran">
        <h1>Hi Their</h1>
      </Greeting>
    </>
  );
}

export default App;
