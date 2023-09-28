import React from "react";
import qapplogo from "./images/qapp-logo.png";
import banklogo from "./images/bank-logo.png";
import { Link } from "react-router-dom";

export default function Imac13() {
  return (
    <div className="box-13">
      <img className="qapplogo" src={qapplogo} alt="qapp-logo" />

      <div className="box-login">
        <div className="box-login-bank">
          <img className="bank-logo" src={banklogo} alt="bank-logo" />

          <div className="h2">
            <h2>Login to Bank Account</h2>
          </div>
          <div className="h1">
            <h4>
              Enter the email or phone number associated with your account to
              reset your password
            </h4>
          </div>
          <Link to="/bank-login">
            {" "}
            <button className="continue-btn">Continue</button>
          </Link>
        </div>
        <div className="box-login-qapp">
          <img className="bank-logo" src={banklogo} alt="bank-logo" />

          <div className="h2">
            {" "}
            <h2>Login to QAPP </h2>
          </div>
          <div className="h1">
            <h4>
              Enter the email or phone number associated with your account to
              reset your password
            </h4>
          </div>

          <Link to="/qapp-login">
            {" "}
            <button className="continue-btn">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
