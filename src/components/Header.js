import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [login, setLogin] = useState("Login");

  const handleLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  //DESTRUCTURING THE OBJECT
  const { userName } = useContext(UserContext);

  //READING/SUBSCRIBING TO THE STORE
  const cartItem = useSelector((store) => store.cart.items);
  //console.log(cartItem);

  return (
    <div className="flex justify-between">
      <div className="logo">
        <Link to="/">
          <img className="w-48" src={LOGO_URL} />
        </Link>
      </div>
      <div className="p-4 m-8 font-semibold text-lg">
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
          <li>
            <Link to="/cart">Cart : {cartItem.length}</Link>
          </li>
          <div> Username: {userName}</div>
          <button onClick={() => handleLogin()}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
