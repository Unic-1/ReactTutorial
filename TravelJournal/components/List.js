import React from "react";
import ListItem from "./ListItem";

export default function List({ data }) {
  console.log("DATA", data);
  let listComponent = data.map((item, index) => {
    return (
      <div>
        <div className="item-wrapper">
          <ListItem info={item} />
        </div>
        <hr />
      </div>
    );
  });

  return <div className="list-container">{listComponent}</div>;
}
