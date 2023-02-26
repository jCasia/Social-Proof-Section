import React from "react";
import "./About.css";

const About = () => {
  const content = {
    heading: "10,000+ of our users love our products.",
    text: "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.",
  };
  return (
    <div className="about">
      <h1 className="heading">{content.heading}</h1>
      <p className="text">{content.text}</p>
    </div>
  );
};

export default About;
