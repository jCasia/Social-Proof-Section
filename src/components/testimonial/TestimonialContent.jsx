import React from "react";
import "./TestimonialContent.css";

const TestimonialContent = (props) => {
  return (
    <div className="testimonial-container">
      <div className="img-name-wrapper">
        <img src={props.img} className="testimonial-img" alt="" />
        <div className="name-buyer-wrapper">
          <p className="testimonial-name">{props.name}</p>
          <p className="testimonial-status">{props.buyer}</p>
        </div>
      </div>
      <blockquote>
        <p className="testimonial-quote"> &ldquo; {props.text} &rdquo;</p>
      </blockquote>
    </div>
  );
};

export default TestimonialContent;
