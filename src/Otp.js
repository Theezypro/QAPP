import React from "react";
import { Link } from "react-router-dom";

export default function Otp() {
  return (
    <div className="Otp">
      <div className="otp-form2">
        <div className="h2 h-2">
          <h2>OTP Verification</h2>
        </div>
        <h1 className="phone-verification v-2">Phone verification code</h1>
        <input
          className="input-code"
          type="number"
          placeholder="Get Code"
        ></input>
        <small className="enter-code ec-2">
          Enter the 6 digit code sent to +234070*****8989
        </small>

        <input
          className="input-code"
          type="number"
          placeholder="Get Code"
        ></input>
        <small className="enter-code">
          Enter the 6 digit code sent to el****ti@gmail.com
        </small>
        <div className="continue-div">
          <Link to="/">
            <button className="continue-btn">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
