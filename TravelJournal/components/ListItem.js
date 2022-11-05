import React from "react";

export default function ListItem({ info }) {
  const { img, country, spot, dateFrom, dateTo, description } = info;
  return (
    <div className="item-container">
      <img className="location-img" src={img}></img>
      <div className="location-details">
        <div className="location">
          <span class="material-symbols-outlined">location_on</span>
          <span className="country">{country}</span>
          <a href="#" className="map-link">
            View on Google Maps
          </a>
        </div>
        <h1 className="spot-name">{spot}</h1>

        <p className="date">
          <strong>
            {dateFrom} - {dateTo}
          </strong>
        </p>

        <p className="description">{description}</p>
      </div>
    </div>
  );
}
