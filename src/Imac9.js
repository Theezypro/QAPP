import React from "react";
import { Link } from "react-router-dom";
import qapplogo from "./images/qapp-logo.png";

export default function Imac9() {
  return (
    <div className="box-9">
      <img className="qapplogo" src={qapplogo} alt="qapp-logo" />
      <div className="new-password-form new-password-form2">
        <div className=" h-2 h2 new-p">
          <h2>New Password</h2>
        </div>
        <p className=" reset-password r-p">
          Set the password for your account so you can login and access all the
          features.
        </p>
        <input className=" n-p" type="tel" placeholder="New Password"></input>
        <h4 className="character1">Must be at least 8 chatracter.</h4>

        <input
          className=" c-p"
          type="password"
          placeholder="Confirm Password"
        ></input>
        <h4 className="character1">Both password must match</h4>

        <Link to="/login">
          <button className="continue-btn continue continue-b">Continue</button>
        </Link>
      </div>
    </div>
  );
}
