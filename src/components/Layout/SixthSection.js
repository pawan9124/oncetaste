import React from "react";
import ContactUs from "../Common/ContactUs";

const SixthSection = () => {
  return (
    <footer className="section-6">
      <video autoPlay muted id="footerVideo">
        <source
          src={require(`../../images/ezgif-2-d1546b04359a.mp4`)}
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="frame" />
      <div className="overlay-footer" />
      <ContactUs />
    </footer>
  );
};
export default SixthSection;
