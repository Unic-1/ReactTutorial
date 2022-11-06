import React from "react";
import boxes from "./boxes";

export default function App() {
  const [allBoxes, setAllBoxes] = React.useState(boxes);

  const boxesComponents = allBoxes.map((box) => (
    <div className="box" key={box.id}></div>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {boxesComponents}
    </main>
  );
}
