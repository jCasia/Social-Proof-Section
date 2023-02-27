import React from "react";
import "./Rating.css";
import RatingContent from "./RatingContent";

const Rating = () => {
  const reviewer = [
    {
      reviewer: "Reviews",
    },
    { reviewer: "Report Guru" },
    {
      reviewer: "BestTech",
    },
  ];

  return (
    <section className="rating">
      {reviewer.map((review) => (
        <RatingContent reviewer={review.reviewer} key={Math.random()} />
      ))}
    </section>
  );
};

export default Rating;
