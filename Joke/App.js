import React from "react";
import Joke from "./components/Joke";

export default function App() {
  const jokes = [
    {
      setup: "I got my daughter a fridge for her birthday.",
      punchline: "I can't wait to see her face light up when she opens it.",
    },
    {
      setup: "I got my daughter a fridge for her birthday.",
      punchline: "I can't wait to see her face light up when she opens it.",
    },
    {
      setup: "I got my daughter a fridge for her birthday.",
      punchline: "I can't wait to see her face light up when she opens it.",
    },
  ];

  let jokeElements = jokes.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));

  return <div>{jokeElements}</div>;
}
