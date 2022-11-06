import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getRandomMeme() {
    let index = parseInt(Math.random() * 100) - 1;
    setMemeImage(memeData.data.memes[index].url);
  }

  return (
    <main>
      <div className="meme--form">
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
        <button className="btn" onClick={getRandomMeme}>
          Get a new meme image{" "}
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
