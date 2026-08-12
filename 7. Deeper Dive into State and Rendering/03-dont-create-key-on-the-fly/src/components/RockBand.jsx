import React from "react";

function RockBand({ rockBand, id }) {
  return (
    <li>
      {id} {rockBand}
    </li>
  );
}

export default RockBand;
