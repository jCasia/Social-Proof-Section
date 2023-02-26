import React from "react";
import "./SectionMain.css";
import About from "./components/about/About";
import Rating from "./components/rating/Rating";
import Testimonial from "./components/testimonial/Testimonial";

const Main = () => {
  return (
    <main className="main">
      <About />
      <Rating />
      <Testimonial />
    </main>
  );
};

export default Main;
