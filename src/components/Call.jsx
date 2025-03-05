import React, { useState } from "react";
import "./Call.css";
import callIcon from "../assets/call-icon.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

const Call = () => {
  const testimonials = [
    {
      text: "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
      user: "Rupaya",
      image: user1,
    },
    {
      text: "Excellent service and super quick delivery. My clothes never felt this fresh!",
      user: "Alex",
      image: user2,
    },
    {
      text: "Highly recommended! The best laundry service I’ve used so far.",
      user: "Samantha",
      image: user3,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="call-section">
      {/* Call Banner */}
      <div className="call-banner">
        <div className="call-text">
          <h2>Call us for a service</h2>
          <p>We deliver the goods to the most complicated places on earth</p>
        </div>
        <button className="call-button">
          <img src={callIcon} alt="Call Icon" className="call-icon" /> Learn More
        </button>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial">
        <button className="nav-button" onClick={prevTestimonial}>&lt;</button>
        <div className="testimonial-content">
          <div className="testimonial-images">
            <img src={user2} alt="User" className="testimonial-img small" />
            <img
              src={testimonials[index].image}
              alt="Main User"
              className="testimonial-img large"
            />
            <img src={user3} alt="User" className="testimonial-img small" />
          </div>
          <p className="testimonial-text">{testimonials[index].text}</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-user">- {testimonials[index].user}</p>
        </div>
        <button className="nav-button" onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  );
};

export default Call;
