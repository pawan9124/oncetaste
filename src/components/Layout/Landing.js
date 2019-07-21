import React, { Component } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import Navigation from "../Common/Navigation";
import "../../css/Landing.css";
import "../../scripts/parallax";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="main-content">
          <FirstSection />
          <div className="rest-content">
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
          </div>
        </div>
        <SixthSection />
        <Navigation />
      </div>
    );
  }
}

export default Landing;
