import React from "react";
import "./navbar.css";
import { assets } from "../../admin_assets/assets.js";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  );
};

export default Navbar;
