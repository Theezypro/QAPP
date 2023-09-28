import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Login">
      <div className="form">
        <div className="h2 h-2">
          <h2>Login</h2>
        </div>

        <button className="phone-email-btn">
          Phone number
          <span className="email-btn">Email</span>
        </button>

        <input className="phone" type="tel" placeholder="Phone"></input>
        <input
          className="password"
          type="password"
          placeholder="Password"
        ></input>
        <Link to="/reset-password">
          <small className="forgot-password">Forgot Password?</small>
        </Link>
        <div className="signin-div">
          <Link to="/otp-verification">
            <button className="sign-in">Sign In</button>
          </Link>
        </div>

        <p className="no-account">
          Dont have an account?{" "}
          <Link to="/SignUp">
            <span className="sign-up">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
