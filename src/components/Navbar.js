import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Switch from "react-switch";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        </ul>

        {/* Toggle Switch shown on screen */}
        <div>
          <div style={{
            position: "fixed",
            top: "15px",
            right: "20px",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
          }}>
            <label className="me-3 my-0 mx-2">{props.mode === "light" ? "Light Mode" : "Dark Mode"}</label>
            <Switch
              onChange={props.toggleMode}
              checked={props.mode === "dark"}
              offColor="#bbb"
              onColor="#000"
              checkedIcon={false}
              uncheckedIcon={false}
              height={22}
              width={48}
              handleDiameter={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired }

Navbar.defaultProps = {
  title: "Mary is "
};
