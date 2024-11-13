import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
const LoginPopup = ({ setSHowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login_popup">
      <form className="login_popup_container">
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setSHowLogin(false)}
            alt=""
          />
        </div>
        <div className="login_popup_inputs">
          {currState === "Login" ? (
            <input type="text" required placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" required placeholder="Your Email" />
          <input type="password" required placeholder="Your Password" />
        </div>
        <button>{currState === "Login" ? "Login" : "Create account"}</button>
        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState == "Login" ? (
          <p onClick={() => setCurrState("Sign Up")}>
            Create a new account? <span>Click here</span>
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")}>
            Already have an account? <span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
