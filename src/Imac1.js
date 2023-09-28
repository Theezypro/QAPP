import React, { useState } from "react";
import qapplogo from "./images/qapp-logo.png";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

export default function Imac1() {
  const [value, setValue] = useState();
  return (
    <div className="box-1">
      <img className="qapplogo qapplogo1" src={qapplogo} alt="qapp-logo" />

      <div className="form">
        <div className="h2 h-2">
          <h2>Login to QAPP</h2>
        </div>
        <button className="phone-email-btn">
          Phone number
          <span className="email-btn">Email</span>
        </button>
        <PhoneInput
          className="phone"
          value={value}
          onChange={(value) => setValue(value)}
          defaultCountry="US"
          placeholder="phone"
        />{" "}
        <input
          className="password"
          type="password"
          placeholder="Password"
        ></input>
        <Link to="/forgot-password">
          <small className="forgot-password">Forgot Password?</small>
        </Link>
        <div className="signin-div">
          <Link to="/phone-otp-verification">
            <button className="sign-in">Sign In</button>
          </Link>
        </div>
        <p className="no-account">
          Dont have an account?{" "}
          <Link to="/qapp-sign-up">
            <span className="sign-up">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
