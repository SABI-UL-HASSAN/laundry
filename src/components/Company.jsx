import React from "react";
import "./Company.css";
import companyImage from "../assets/company-image.png"; 

const Company = () => {
  return (
    <div className="company-container">
      <div className="achievement-section">
        <h2>Company achievement</h2>
        <div className="achievement-grid">
          <div className="achievement-item">
            <h3>4000</h3>
            <p>The automated process starts as soon as your clothes go into the machine.</p>
          </div>
          <div className="achievement-item">
            <h3>300+</h3>
            <p>The automated process starts as soon as your clothes go into the machine.</p>
          </div>
          <div className="achievement-item">
            <h3>95%</h3>
            <p>The automated process starts as soon as your clothes go into the machine.</p>
          </div>
        </div>
        <div className="achievement-decoration"></div>
      </div>

      <div className="about-company">
        {}
        <img src={companyImage} alt="Company" className="company-img" />
        <div className="about-text">
          <h3>About company</h3>
          <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
          <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
          <button className="about-btn">About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Company;
