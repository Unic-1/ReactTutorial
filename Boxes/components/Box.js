import React from "react";

export default function Box(props) {
  const [state, setState] = React.useState(props.on);

  const styles = {
    backgroundColor: state ? "#222222" : "transparent",
  };

  function toggleState() {
    setState((prevState) => !prevState);
  }

  return <div className="box" style={styles} onClick={toggleState}></div>;
}
