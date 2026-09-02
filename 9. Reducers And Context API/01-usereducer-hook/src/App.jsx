// import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
};
const initialState = { count: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handelReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const handelIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  // const [state, setState] = useState({ count: 0 });

  // const handelDecrease = () => {
  //   setState((prev) => ({ ...prev, count: prev.count - 1 }));
  // };

  // const handelReset = () => {
  //   setState((prev) => ({ ...prev, count: 0 }));
  // };

  // const handelIncrease = () => {
  //   setState((prev) => ({ ...prev, count: prev.count + 1 }));
  // };

  return (
    <div className="container">
      <h1>Conter Application</h1>
      <h2>{state.count}</h2>
      <div className="button-container">
        <button onClick={handelDecrease}>Decrease</button>
        <button onClick={handelReset}>Reset</button>
        <button onClick={handelIncrease}>Increase</button>
      </div>
    </div>
  );
}

export default App;
