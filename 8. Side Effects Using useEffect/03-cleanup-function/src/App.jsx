import { useState } from "react";
// import CleanupFunction from "./components/CleanupFunction";
import MouseMoveEvent from "./components/MouseMoveEvent";

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
      {showComponent && <MouseMoveEvent />}
    </>
  );
}

export default App;
