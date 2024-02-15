import React from "react";
import logo from "../assets/img/back.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "url_to_image1.jpg",
      stars: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      image: "url_to_image2.jpg",
      stars: 4,
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 1,
      image: "url_to_image1.jpg",
      stars: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      image: "url_to_image2.jpg",
      stars: 4,
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <h1 className="title-t">Client Testimonials</h1>
      <br />
      <br />
      <div className="testimonials-container">
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <div className="testimonial-image">
                <img src={testimonial.image} alt="Client" />
              </div>
              <div className="testimonial-details">
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <span key={index} className="star">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="comment">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
