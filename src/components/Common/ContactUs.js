import React from "react";
import FollowUs from "../Common/FollowUs";
import Contact from "../Common/Contact";

const ContactUs = () => {
  return (
    <div className="footer-about">
      <div className="footer-heading">
        <h2>Contact Us</h2>
        <p>Serving the best cusine in the world since 1923</p>
      </div>
      <div className="contact-details">
        <Contact />
        <FollowUs />
      </div>
    </div>
  );
};

export default ContactUs;
