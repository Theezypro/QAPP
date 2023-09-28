import React from "react";
import { Link } from "react-router-dom";

export default function Imac17() {
  return (
    <Link to="/login" className="link">
      <div className="box-17">
        {" "}
        <div className="blank-form">
          <div className="click-anywhere">
            <h3>CLICK ANYWERE TO GO BACK TO LOGIN</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
