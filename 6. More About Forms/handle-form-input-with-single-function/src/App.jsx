import { useState } from "react";
import HandleMultipleInputs from "./components/HandleMultipleInputs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HandleMultipleInputs />
    </>
  );
}

export default App;
