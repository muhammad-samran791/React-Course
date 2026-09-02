import { useState } from "react";
// import CleanupFunction from "./components/CleanupFunction";
// import MouseMoveEvent from "./components/MouseMoveEvent";
// import FetchDataExample from "./components/FetchDataExample";
import Form from "./components/Form";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {showComponent && <Form />}
    </>
  );
}

export default App;
