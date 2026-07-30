import React from "react";
import styles from "./Greeting.module.css";

function Greeting() {
  const firstName = "Muhammad Samran";
  const nameUpperCase = (name) => name.toUpperCase();

  const isLightBlue = true;
  const changeColorStyling = {
    backgroundColor: isLightBlue ? "lightblue" : "pink",
    fontFamily: "sans-serif",
    margin: "1rem",
    padding: "1rem",
  };

  const isDarkMod = true;

  return (
    <div
      className={`${styles.container} ${isDarkMod ? styles["bg-dark"] : ""}`}
    >
      <h1>Hello {nameUpperCase(firstName)}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quam,
        nihil eos nostrum et ipsum eaque dolor dignissimos veritatis quaerat
        laudantium molestias deleniti sequi provident necessitatibus vero nam!
        At, similique.
      </p>
    </div>
  );
}

export default Greeting;
