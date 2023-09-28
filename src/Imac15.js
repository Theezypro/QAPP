import React from "react";
import { Link } from "react-router-dom";

export default function Imac15() {
  return (
    <div className="box-15">
      <div className="otp-form">
        <div className="h2 h-2 otp-verification">
          <h2>OTP Verification</h2>
        </div>
        <h1 className="phone-verification">Phone verification code</h1>
        <input
          className="input-code"
          type="number"
          placeholder="Get Code"
        ></input>
        <small className="enter-code">
          Enter the 6 digit code sent to +234070*****8989
        </small>
        <Link to="/new-password-qapp">
          <button className="continue-btn">Continue</button>
        </Link>
      </div>
    </div>
  );
}
