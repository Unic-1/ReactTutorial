import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import travelLocations from "./data";

export default function App() {
  console.log(travelLocations);
  return (
    <div>
      <Header />
      <List data={travelLocations} />
    </div>
  );
}
