import React from "react";

const ThirdSection = props => {
  return (
    <section className="section-3">
      <div className="row">
        <div className="col-4">
          <img
            src={require(`../../images/real-chill.png`)}
            className="chilli"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 since">
          <div className="since-text">
            <h2>Once Taste</h2>
            <p>seit 1923</p>
          </div>
        </div>
        <div className="col-6 winebar">
          <div className="winebar-text">
            <h2>WINEBAR</h2>
            <p>DRINKS&FEIERN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
