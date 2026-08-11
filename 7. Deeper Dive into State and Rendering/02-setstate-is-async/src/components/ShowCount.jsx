import React from "react";

function ShowCount(props) {
  let { count } = props;
  // count = 1000; // Danger Point Don't Use
  return <span>{count}</span>;
}

export default ShowCount;
