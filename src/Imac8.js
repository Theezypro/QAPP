import React from "react";
import { Link } from "react-router-dom";
import qapplogo from "./images/qapp-logo.png";

export default function Imac8() {
  return (
    <div className="box-8">
      <img className="qapplogo" src={qapplogo} alt="qapp-logo" />
      <div className="forgot-password-form">
        <div className=" h-2 h2 forget-p">
          <h2>Forgot Password</h2>
        </div>
        <p className=" reset-password">
          Enter the email or phone number associated with your account to reset
          your password
        </p>
        <input className="phone" type="tel" placeholder="Phone Number"></input>
        <h2 className="or">OR</h2>

        <input
          className="email-address"
          type="email"
          placeholder="Email Address"
        ></input>

        <div className="continue-div">
          <Link to="/email-otp-verification">
            <button className="continue-btn ">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
