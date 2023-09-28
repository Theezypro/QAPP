import React from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="ResetPassword">
      <div className="Reset-password-form">
        <div className=" h-2 h2 forget-p">
          <h2>Reset Password</h2>
        </div>
        <p className=" reset-password">
          Enter the email or phone number associated with your account to reset
          your password
        </p>
        <input className="phone" type="tel" placeholder="Phone Number"></input>

        <Link to="/new-password">
          <button className="continue-btn continue continue-b">Get OTP</button>
        </Link>
      </div>
    </div>
  );
}
