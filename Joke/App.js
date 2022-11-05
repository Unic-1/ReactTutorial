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

  let x = <Joke setup={jokes[0].setup} punchline={jokes[0].punchline} />;
  // x += <Joke setup={jokes[0].setup} punchline={jokes[0].punchline} />;

  return (
    <div>
      <Joke setup={jokes[0].setup} punchline={jokes[0].punchline} />
      <Joke setup={jokes[1].setup} punchline={jokes[1].punchline} />
      <Joke setup={jokes[2].setup} punchline={jokes[2].punchline} />
    </div>
  );
}
