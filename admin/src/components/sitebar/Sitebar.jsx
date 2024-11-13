import React from "react";
import "./sitebar.css";
import { assets } from "../../admin_assets/assets";
import { Link, NavLink } from "react-router-dom";
const Sitebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_options">
        <NavLink to={"/add"} className="sidebar_option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to={"/list"} className="sidebar_option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>{" "}
        <NavLink to={"/orders"} className="sidebar_option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sitebar;
