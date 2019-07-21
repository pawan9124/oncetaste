import React from "react";
import SubscriptionBox from "../Common/SubscriptionBox";
import CircleConnectedStyle from "../Common/CircleConnectedStyle";

const subscription1 = [
  { item: "1 Meal", select: true },
  { item: "Local Choice", select: true },
  { item: "International Choice", select: false },
  { item: "Special Day Meal", select: false },
  { item: "Voucher On Deals", select: false }
];
const subscription2 = [
  { item: "1 Meal", select: true },
  { item: "Local Choice", select: true },
  { item: "International Choice", select: true },
  { item: "Special Day Meal", select: false },
  { item: "Voucher On Deals", select: false }
];
const subscription3 = [
  { item: "2 Meal", select: true },
  { item: "Local Choice", select: true },
  { item: "International Choice", select: true },
  { item: "Special Day Meal", select: true },
  { item: "Voucher On Deals", select: true }
];

const listItems = [
  "Tell us your taste",
  "Choose a Plan & Subscribe",
  "Get Food Everyday",
  "No Worries! You can choose anytime"
];

const FourthSection = props => {
  return (
    <div className="section-4">
      <div className="row">
        <div className="col-4 subscription-details">
          <p className="discover-world">Discover the World's</p>
          <h2 className="best-cuisine">Best Cuisine</h2>
          <p className="delivery-text">
            You choose and we delivery world's best cuisines everyday at your
            doorstep.
          </p>
          <CircleConnectedStyle listItems={listItems} />
        </div>
        <div className="col-8 subscription-box">
          <div className="row">
            <div className="col-3 subscription-box-height">
              <SubscriptionBox
                heading="$<span class='price'>350</span>/month"
                listItems={subscription2}
                class="gold"
              />
            </div>
            <div className="col-3 subscription-box-height">
              <SubscriptionBox
                heading="$<span class='price'>550</span>/month"
                listItems={subscription3}
                class="platinum"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourthSection;
