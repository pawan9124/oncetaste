import React from "react";

export default props => {
  console.log("daa", props.carousel);
  let returnHTMl = props.carousel.map((data, index) => {
    return (
      <div className="slides fade" key={index + "carousel"}>
        <div className="carousel-caption">{data.description}</div>
        <img src={require(`../../images/${data.image}`)} alt="carousel" />
      </div>
    );
  });
  return <div>{returnHTMl}</div>;
};
