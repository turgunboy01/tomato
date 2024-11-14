import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setSHowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const endpoint =
      currState === "Login" ? "/api/user/login" : "/api/user/register";
    const newUrl = `${url}${endpoint}`;

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        const { token } = response.data;
        setToken(token);
        localStorage.setItem("token", token);
        setSHowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="login_popup">
      <form onSubmit={onLogin} className="login_popup_container">
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setSHowLogin(false)}
            alt="Close"
          />
        </div>
        <div className="login_popup_inputs">
          {currState === "Sign up" && (
            <input
              type="text"
              name="name"
              required
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            required
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            required
            placeholder="Your Password"
          />
        </div>
        <button type="submit">
          {currState === "Login" ? "Login" : "Create account"}
        </button>
        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign up")}>
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
