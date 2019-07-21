import React from "react";

const CircleConnectedStyle = props => {
  let listItem = props.listItems.map((data, index) => {
    return (
      <React.Fragment key={"listStyle" + index}>
        <li>
          <span className="step-guide">
            <span className="step-guide-number">{index + 1}</span>
          </span>
          <span className="step-guide-text">{data}</span>
        </li>
        {index < props.listItems.length - 1 ? (
          <div className="black-line" />
        ) : null}
      </React.Fragment>
    );
  });
  return <ul className="step-guide-list">{listItem}</ul>;
};

export default CircleConnectedStyle;
