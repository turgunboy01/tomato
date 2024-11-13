import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [active, setActive] = useState("home");
  const handleActive = (active) => {
    setActive(active);
  };

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar_menu">
        <Link to={"/"}>
          <li
            onClick={() => handleActive("home")}
            className={active == "home" ? "active" : ""}
          >
            home
          </li>
        </Link>
        <li
          onClick={() => handleActive("menu")}
          className={active == "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => handleActive("mobile")}
          className={active == "mobile" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => handleActive("contact")}
          className={active == "contact" ? "active" : ""}
        >
          contect us
        </li>
      </ul>
      <div className="navbar_rigth">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar_searchIcon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
