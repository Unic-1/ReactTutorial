import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <img
          className="header--image"
          src="./images/troll-face.png"
          width={35}
        />
        <span className="header--title">Meme Generator</span>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
}
