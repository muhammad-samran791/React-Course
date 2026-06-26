const rootElement = document.getElementById("root");

// Type, Props, Children
// const heading = React.createElement("h1", null, "Hello World!!!");

// const helloWorld = () => {
//   return React.createElement("h1", { className: "heading" }, "Hello World!!!");
// };

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

ReactDOM.createRoot(rootElement).render(<HelloWorld />);
