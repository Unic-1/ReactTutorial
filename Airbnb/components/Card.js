import React from "react";

export default function Card({ item }) {
  const { coverImg: img, location, title, price, openSpots, stats } = item;
  const { rating, reviewCount } = stats;

  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="card">
      <img className="card-img" src={"./images/" + img} />
      {badgeText && <span className="tag">{badgeText}</span>}
      <div className="review-rating mt-10">
        <img className="star-img" src="./images/star.png" />{" "}
        <span className="rating">{rating}</span>{" "}
        <span className="review-count gray">({reviewCount})</span>
        <span className="country gray"> - {location}</span>
      </div>
      <p className="title mt-10">{title}</p>
      <p className="mt-10">
        <span className="bold">From ${price}</span> / person
      </p>
    </section>
  );
}
