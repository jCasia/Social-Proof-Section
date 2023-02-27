import React from "react";
import "./RatingContent.css";

import starImg from "../../images/icon-star.svg";

const RatingContent = (props) => {
  return (
    <div className="rating-container">
      <div className="star-container">
        <img src={starImg} alt="" className="star-img" />
        <img src={starImg} alt="" className="star-img" />
        <img src={starImg} alt="" className="star-img" />
        <img src={starImg} alt="" className="star-img" />
        <img src={starImg} alt="" className="star-img" />
      </div>
      <div className="rating-text-container">
        <p>Rated 5 Stars in {props.reviewer}</p>
      </div>
    </div>
  );
};

export default RatingContent;
