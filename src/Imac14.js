import React from "react";
import qapplogo from "./images/qapp-logo.png";
import { Link } from "react-router-dom";

export default function Imac14() {
  return (
    <div className="box-14">
      <img className="qapplogo qapplogo1" src={qapplogo} alt="qapp-logo" />

      <div className="form ">
        <div className="banklogin-header h-2">
          <h2>Login to Bank Account</h2>
        </div>

        <input
          className="select-bank s-b "
          type="tel"
          placeholder="Select Bank"
        ></input>
        <input
          className="account-number a-n"
          type="number"
          placeholder="Account Number"
        ></input>
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
      </div>
    </div>
  );
}
