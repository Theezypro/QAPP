import React from "react";
import { Link } from "react-router-dom";
import qapplogo from "./images/qapp-logo.png";

export default function Imac16() {
  return (
    <div className="box-16">
      <img className="qapplogo" src={qapplogo} alt="qapp-logo" />
      <div className="otp-form">
        <div className="h2 h-2 otp-verification">
          <h2>OTP Verification</h2>
        </div>
        <h1 className="phone-verification">Email verification code</h1>
        <input
          className="input-code"
          type="number"
          placeholder="Get Code"
        ></input>
        <small className="enter-code">
          Enter the 6 digit code sent to 070*****8989
        </small>
        <div className="continue-div">
          <Link to="/new-password-qapp">
            <button className="continue-btn">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
