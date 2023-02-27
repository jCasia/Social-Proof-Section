import React from "react";
import "./Testimonial.css";
import TestimonialContent from "./TestimonialContent";

import imgColton from "../../images/image-colton.jpg";
import imgIrene from "../../images/image-irene.jpg";
import imgAnne from "../../images/image-anne.jpg";

const Testimonial = () => {
  const testimonial = [
    {
      name: "Colton Smith",
      text: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
      img: imgColton,
    },
    {
      name: "Irene Roberts",
      text: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
      img: imgIrene,
    },
    {
      name: "Anne Walace",
      text: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      img: imgAnne,
    },
  ];

  return (
    <section className="testimonial">
      {testimonial.map((eachTestimonial) => {
        return (
          <TestimonialContent
            name={eachTestimonial.name}
            text={eachTestimonial.text}
            img={eachTestimonial.img}
            buyer="Verified Buyer"
            key={Math.random()}
          />
        );
      })}
    </section>
  );
};

export default Testimonial;
