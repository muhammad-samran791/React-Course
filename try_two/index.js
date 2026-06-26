const rootElement = document.getElementById("root");

const HelloWorld = () => {
  return <h1>Hello World!!!</h1>;
};

ReactDOM.createRoot(rootElement).render(<HelloWorld />);
