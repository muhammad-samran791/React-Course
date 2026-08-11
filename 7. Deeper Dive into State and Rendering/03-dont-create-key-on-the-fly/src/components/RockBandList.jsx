import { React, useState } from "react";
import RockBand from "./RockBand";

function RockBandList() {
  const [rockBands, setRockBand] = useState([
    { name: "name1", id: 1 },
    { name: "name2", id: 2 },
    { name: "name3", id: 3 },
    { name: "name4", id: 4 },
    { name: "name5", id: 5 },
    { name: "name6", id: 6 },
    { name: "name7", id: 7 },
    { name: "name8", id: 8 },
    { name: "name9", id: 9 },
    { name: "name10", id: 10 },
  ]);

  const addNew = () => {
    console.log("Add New");
  };

  return (
    <div>
      <h1>Rock Bands</h1>
      <ul>
        {rockBands.map((rockBand) => {
          return <RockBand rockBand={rockBand.name} key={rockBand.id} />;
        })}
      </ul>
      <button onClick={addNew}>Add</button>
    </div>
  );
}

export default RockBandList;
