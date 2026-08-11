import React, { useRef, useState } from "react";

function UseRef() {
  // const [count, setCount] = useState(1);

  // const plus = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  // const minus = () => {
  //   if (count <= 0) {
  //     alert("Error");
  //     return;
  //   }
  //   setCount((prevState) => prevState - 1);
  // };

  // const username = useRef("samran");

  // const changeName = () => {
  //   username.current = "Rafay";
  // };

  // const h1Ref = useRef();
  // const handleClick = () => {
  //   const heading = h1Ref;
  //   heading.current.style.color  = "red";
  // };

  const usernameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef;
    console.log(username.current.value);
  };

  return (
    <>
      {/* <button onClick={plus}>Plus</button>
      <p>{count}</p>
      <button onClick={minus}>Minus</button> */}   
      {/* <p>{username.current}</p> */}
      {/* <button onClick={changeName}>Change Name</button> */}
      {/* <h1 ref={h1Ref}>Hello</h1> */}
      {/* <button onClick={handleClick}>Change Style</button> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" ref={usernameRef} />
        <input type="submit" />
      </form>
    </>
  );
}

export default UseRef;
