import React from "react";
import "./Services.css";
import laundryIcon from "../assets/laundry-icon.png";
import ironingIcon from "../assets/ironing-icon.png";
import laundryImage from "../assets/laundry.jpg";
import ironingImage from "../assets/ironing.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <button className="services-btn">Services</button>
        <h2>Services we offer</h2>
      </div>
      <div className="services-grid">
        <div className="service-item">
          <img src={laundryImage} alt="Laundry Service" className="service-image" />
        </div>
        <div className="service-item service-text">
          <img src={laundryIcon} alt="Laundry Icon" className="service-icon" />
          <h3>Cloth Laundry</h3>
          <p>The automated process starts as soon as your clothes get into the machine. The outcome is gleaming clothes!</p>
        </div>
        <div className="service-item service-text">
          <img src={ironingIcon} alt="Ironing Icon" className="service-icon" />
          <h3>Cloth Ironing</h3>
          <p>The automated process starts as soon as your clothes get into the machine. The outcome is gleaming clothes!</p>
        </div>
        <div className="service-item">
          <img src={ironingImage} alt="Ironing Service" className="service-image" />
        </div>
      </div>
    </section>
  );
};

export default Services;
  
  