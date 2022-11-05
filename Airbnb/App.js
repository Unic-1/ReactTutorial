import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  let cardElements = cardData.map((cardInfo) => {
    return <Card key={cardInfo.id} item={cardInfo} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="card-container">{cardElements}</div>
    </div>
  );
}
