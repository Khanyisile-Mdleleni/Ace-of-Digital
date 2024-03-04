import React from "react";
import boy from "../assets/img/boy.jpg";
import girl from "../assets/img/girl.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Beven Chiwaz",
      image: boy,
      stars: 5,
      comment:
        "Outstanding service and creativity from Ace of Digital for my business cards. Highly recommend their expertise.",
    },
    {
      id: 2,
      name: "Amanda Khalela",
      image: girl,
      stars: 4,
      comment:
        "Exceptional website design by Ace of Digital, highly recommend their services for professional and stunning online presence.",
    },
    {
      id: 3,
      name: "Ayanda Mthembu",
      image: boy,
      stars: 5,
      comment:
        "Highly impressed with the logo design by Ace of Digital. Exceeded my expectations and truly captured the essence of my brand!",
    },
    {
      id: 4,
      name: "Onelisiwe Tshwane",
      image: girl,
      stars: 4,
      comment:
        "Incredible content writing services from Ace of Digital for my business blog. Engaging, informative, and expertly crafted content every time!",
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
                <div className="testimonial-header">
                  <h3>{testimonial.name}</h3>
                  <div className="stars">
                    {[...Array(testimonial.stars)].map((_, index) => (
                      <span key={index} className="star">
                        &#9733;
                      </span>
                    ))}
                  </div>
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
