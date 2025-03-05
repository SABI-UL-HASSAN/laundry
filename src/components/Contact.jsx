import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24172.82211803235!2d-74.04450094860355!3d40.71277614872115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDInMjcuMCJX!5e0!3m2!1sen!2sus!4v1617160875153!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="contact-info">
          <h3>Laundry service</h3>
          <p>The automated process starts as soon as your clothes.</p>
          <p>📍 256/A, Green Road, NYC-9034</p>
          <p>📞 (89) 267 256-3902</p>
          <p>✉ laundry@578.com</p>
        </div>
      </div>

      <div className="footer">
        <div className="footer-section">
          <h3>📌 Laundry</h3>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Dry Cleaning</li>
            <li>- - -</li>
            <li>Dry Clean</li>
            <li>- - -</li>
            <li>Ironing Services</li>
            <li>- - -</li>
            <li>Laundry Service London</li>
            <li>- - -</li>
            <li> Laundry App</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in touch</h3>
          <p className="contact-phone" >(90) 898 789-8957 </p>
          <p>laundry@567.com</p>
          <p>789/A, Green Road NYC-9089</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
