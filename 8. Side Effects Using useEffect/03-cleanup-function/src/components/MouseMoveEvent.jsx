import React, { useEffect, useState } from "react";

function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log({ x: e.clientX, y: e.clientY });
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </>
  );
}

export default MouseMoveEvent;
