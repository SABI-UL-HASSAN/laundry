import React from "react";
import "./Process.css";
import collectIcon from "../assets/collect.png";
import washIcon from "../assets/wash.png";
import deliveryIcon from "../assets/delivery.png";

const Process = () => {
  return (
    <section className="process">
      <div className="process-header">
        <button className="process-btn">Our Process</button>
        <h2>This is how we work</h2>
      </div>
      <div className="process-steps">
        <div className="step">
          <img src={collectIcon} alt="Collect Clothes" />
          <h3>We Collect Your Clothes</h3>
          <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
        </div>
        <div className="step">
          <img src={washIcon} alt="Wash Clothes" />
          <h3>Wash Your Clothes</h3>
          <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
        </div>
        <div className="step">
          <img src={deliveryIcon} alt="Get Delivery" />
          <h3>Get Delivery</h3>
          <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
