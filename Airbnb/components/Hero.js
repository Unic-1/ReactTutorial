import React from "react";

export default function Hero() {
  return (
    <main className="container">
      <img className="hero--image" src="./images/photo-grid.png" />
      <div className="hero--info">
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--para">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </main>
  );
}
