import React from "react";
import "./footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            officiis architecto ea ex hic quis aspernatur corporis eligendi et.
            Dolorum quos, distinctio placeat obcaecati itaque aliquam molestias
            quod fugit possimus!
          </p>
          <div className="footer_social_icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+99 895 123 21 75</li>
            <li>turgunboy.channel@gamil.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 &copy; Tomato.com - All RIght Reserved.</p>
    </div>
  );
};

export default Footer;
