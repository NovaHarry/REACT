import React from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="logo">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="nav-list p-4 m-8">
        <ul className="flex gap-3 ">
          <li>Online : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
