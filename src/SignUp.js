import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="SignUp">
      <div className="sign-up-form">
        <div className="h2 h-3">
          <h2>Sign Up</h2>
        </div>
        <input
          className="first-name"
          type="text"
          placeholder="First Name"
        ></input>
        <input
          className="last-name"
          type="text"
          placeholder="Last Name"
        ></input>
        <input className="phone" type="tel" placeholder="Phone"></input>
        <input
          className="email-address"
          type="email"
          placeholder="Email Address"
        ></input>
        <input
          className="password"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="confirm-password"
          type="password"
          placeholder="Confirm Password"
        ></input>
        <input
          className="referral-code"
          type="number"
          placeholder="Referral Code (Optional)"
        ></input>{" "}
        <div className="terms">
          <input type="checkbox" class="material-symbols-outlined"></input>
          <small className="create-account">
            By creating your account you agree with to our Terms and Conditions.
          </small>
        </div>
        <div className="continue-div">
          <Link to="/otp-verification">
            {" "}
            <button className="continue-btn continue">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
