import React from "react";

const SubscriptionBox = props => {
  const listItem = props.listItems.map((data, index) => {
    return (
      <li className="listItemSub" key={"li" + index}>
        {data.select ? (
          <i className="fas fa-check-circle"> </i>
        ) : (
          <i className="fas fa-times-circle" />
        )}
        <span className="listDataSub">{data.item}</span>
      </li>
    );
  });
  return (
    <div className={props.class}>
      <h3 dangerouslySetInnerHTML={{ __html: props.heading }} />
      <ul className="listItemUL">{listItem}</ul>
      <a href="#">Choose</a>
    </div>
  );
};

export default SubscriptionBox;
