import React from "react";
import Carousel from "../Common/Carousel";
// import { carousel } from "../../scripts/carousel";

const carouselData = [
  {
    description: "First Image",
    image: "india.png",
    caption: "Eat delicious and healthy"
  },
  {
    description: "Second Image",
    image: "mexico.png",
    caption: "Get from every corner of the world"
  },
  {
    description: "Third Image",
    image: "turkey.png",
    caption: "/Get surprise befenits on subscription"
  }
];
class SecondSection extends React.Component {
  render() {
    return (
      <section className="section-2">
        <div className="row">
          <div className="col-12">
            <h1>VINTAGE TRADITIONS</h1>
          </div>
          <div className="row ">
            <p className="col-12 vintage-text">
              The OnceTaste is a traditional inn in the middle of Graz. Here we
              try to make old tavern traditions come back to life. Our
              restaurant was first opened in 1923 and since then has helped
              shape the gastronomy history of Graz.
            </p>
            <p className="col-12 vintage-text">
              Traditional cuisine and young hospitality come together in our
              time-honored inn, resulting in a unique blend. Let us guide you
              through the experience Laufke - experience inns again.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SecondSection;
