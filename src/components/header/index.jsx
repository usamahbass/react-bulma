import React from "react";

const Header = () => {
  return (
    <nav className="container navbar navbar-static has-background-transparent ">
      <div className="navbar-brand">
        <a
          href="!#"
          className="navbar-item has-text-link has-text-weight-medium is-size-3"
        >
          Raksye.
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div
          className="navbar-start"
          style={{ marginRight: 0, marginLeft: "auto" }}
        >
          <a href="!#" className="navbar-item has-text-link">
            Landings
          </a>

          <a href="!#" className="navbar-item has-text-link">
            Pages
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="!#" className="navbar-link has-text-link">
              Account
            </a>
            <div className="navbar-dropdown">
              <a href="!#" className="navbar-item has-text-link">
                Sign In
              </a>
              <a href="!#" className="navbar-item has-text-link">
                Sign Up
              </a>
              <a href="!#" className="navbar-item has-text-link">
                Password Reset
              </a>
              <a href="!#" className="navbar-item has-text-link">
                Error
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="!#" className="navbar-link has-text-link">
              Documentation
            </a>
            <div className="navbar-dropdown">
              <a href="!#" className="navbar-item has-text-link">
                Documentation
              </a>
              <a href="!#" className="navbar-item has-text-link">
                Components
              </a>
              <a href="!#" className="navbar-item has-text-link">
                Change Log
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <button className="button m-auto is-link">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
