import React, { useState } from "react";
import { LOGO_URL } from "../configFiles/config";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
