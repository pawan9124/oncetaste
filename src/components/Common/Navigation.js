import React from "react";

const Navigation = () => {
  return (
    <div className="wrapper">
      <div className="burger-nav-burger">
        <i className="fas fa-bars openNav" />
      </div>
      <div className="close-nav-bar">
        <i className="fas fa-times closeNav" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="##">
              <i className="fas fa-hotel" />
              <span className="menu-item">Home</span>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="fas fa-utensils" />
              <span className="menu-item">Diner</span>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="fas fa-glass-martini-alt" />
              <span className="menu-item">Wine Bar</span>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="fas fa-couch" />
              <span className="menu-item">Lounge</span>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="far fa-calendar-alt" />
              <span className="menu-item">Events</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navigation-mobile">
        <div className="mobile-frame" />

        <ul>
          <li>
            <a href="##">
              <span className="menu-item-mobile">Home</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className="menu-item-mobile">Diner</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className="menu-item-mobile">Wine Bar</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className="menu-item-mobile">Lounge</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span className="menu-item-mobile">Events</span>
            </a>
          </li>
        </ul>
        <div className="overlay-mobile" />
      </nav>
    </div>
  );
};

export default Navigation;
