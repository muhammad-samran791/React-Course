import { useEffect, useRef } from "react";

function Form() {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  });

  return (
    <div>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Enter Text Here"
        ref={textRef}
      />
    </div>
  );
}

export default Form;
