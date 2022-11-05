import React from "react";

export default function Meme() {
  return (
    <form className="meme--form">
      <input type="text" placeholder="Shut up" />
      <input type="text" placeholder="and take my money" />
      <button className="btn">Get a new meme image </button>
    </form>
  );
}
