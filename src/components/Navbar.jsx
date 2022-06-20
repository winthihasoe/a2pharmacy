import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        padding: "0.5rem",
        textAlign: "left",
      }}
    >
      <Link to="/" className="nav-link-btn">
        Go Back
      </Link>
      {/* <Link to="/retail-price" className="nav-link-btn">
        Retail Price
      </Link>

      <Link to="/doctor-price" className="nav-link-btn">
        Doctor Price
      </Link> */}
    </nav>
  );
}
