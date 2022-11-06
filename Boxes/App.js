import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

export default function App() {
  const [allBoxes, setAllBoxes] = React.useState(boxes);

  const boxesComponents = allBoxes.map((box) => (
    <Box on={box.on} id={box.id} key={box.id} handleClick={toggleBoxState} />
  ));

  function toggleBoxState(id) {
    setAllBoxes((prevBoxes) => {
      let arr = prevBoxes.map((prevBox) => {
        if (box.id === id) {
          return {
            ...prevBox,
            on: !prevBox.on,
          };
        }
        return prevBox;
      });
      return arr;
    });
  }

  return (
    <main>
      <h1>Boxes will go here</h1>
      {boxesComponents}
    </main>
  );
}
