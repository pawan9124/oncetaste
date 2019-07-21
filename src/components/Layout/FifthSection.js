import React from "react";

const FifthSection = props => {
  return (
    <section className="section-5">
      <div className="row">
        <div className="col-12">
          <h1>Subscribe Newsletter</h1>
          <form submit="submitSubscription()">
            <div>
              <input
                type="email"
                className="subscription-email"
                placeholder="Please Enter your email"
              />
            </div>
            <div className="subscription-button">
              <a type="submit">Subscribe</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default FifthSection;
