import react from "react";
import reactDom from "react-dom/client";

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

const rootElement = document.getElementById("root");

const heading = reactDom.createRoot(rootElement);

heading.render(
  <react.StrictMode>
    <HelloWorld />
  </react.StrictMode>,
);
