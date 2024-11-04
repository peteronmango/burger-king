import React from "react";
import logo from "../assets/Burger-King-logo.svg";
import { Link } from "react-router-dom";
import whooper from "../assets/THEWHOOPER.jpg";

function OrderNav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Burger King Logo" />
        </div>
        <ul className="navlinks-1">
          <Link to="/Order">Order</Link>
          <Link to="#">Menu</Link>
          <Link to="#">Offer</Link>
          <Link to="#">Restaurants</Link>
          <Link to="#">Careers</Link>
          <Link to="#">News</Link>
        </ul>
        <div className="Register-button">
          <button
            style={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "20px",
              fontSize: "",
              border: "none",
              padding: "12px 15px",
              marginLeft: "500px",
            }}
          >
            Register
          </button>
        </div>
      </nav>
    </>
  );
}

export default OrderNav;
