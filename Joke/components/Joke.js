import React from "react";

export default function Joke({ setup, punchline }) {
  return (
    <div className="card">
      <h3>{setup}</h3>
      <p>{punchline}</p>
    </div>
  );
}
