import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

export default function App() {
  const [allBoxes, setAllBoxes] = React.useState(boxes);

  const boxesComponents = allBoxes.map((box) => (
    <Box on={box.on} key={box.id} />
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {boxesComponents}
    </main>
  );
}
