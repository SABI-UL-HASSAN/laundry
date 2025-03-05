import React from "react";
import "./Navbar.css";
import { FaTshirt } from "react-icons/fa"; 
import callIcon from "../assets/call-icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-brand">
        <span className="logo-icon"><FaTshirt /></span>
        <span className="logo-text">Laundry</span>
      </div>

      
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>






      <div className="navbar-contact">
        <span className="call-button">
                  <img src={callIcon} alt="Call Icon" className="call-icon" />
                </span>
        <span className="phone"> (08) 728 256 266</span>
        <button className="appointment-btn">Make an Appointment</button>
      </div>
    </nav>
  );
};

export default Navbar;