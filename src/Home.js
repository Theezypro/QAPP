import React from "react";
import { Link } from "react-router-dom";
import homeBackground from "./images/background-image.png";
import { MdLanguage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import qapplogo from "./images/qapp-logo.png";
import networklogo from "./images/Network-logo.png";
import handimage from "./images/hand-image.png";
import playstoreDownload from "./images/playstore-download.png";
import appstoreDownload from "./images/appstore-download.png";
import financeIcon from "./images/finance-icon.png";
import merchantIcon from "./images/merchant-icon.png";
import consumerIcon from "./images/consumer-icon.png";
import arrowDown from "./images/arrow-down.png";

import ecobankLogo from "./images/Ecobank-logo.png";

import fasylLogo from "./images/Fasyl-logo.png";
import sgLogo from "./images/sg-logo.png";
import folixxLogo from "./images/Folixx-logo.png";

export default function Home() {
  const background = {
    backgroundImage: `url(${homeBackground})`,
    backgroundSize: "cover",
  };
  return (
    <div className="home" style={background}>
      <nav className="navbar">
        <div className="menu">
          <ul className="home-menu">Home</ul>
          <Link to="./feature" className="feature-link">
            <ul className="feature-menu">Feature</ul>
          </Link>
          <Link to="./request" className="request-link">
            <ul className="request-menu">Request a demo</ul>
          </Link>
          <Link to="./account" className="account-link">
            <ul className="account-menu"> Account</ul>
          </Link>
        </div>
        <div className="right-menu">
          <input className="input-lang" placeholder="En"></input>{" "}
          <span className="down-arrow">
            <IoMdArrowDropdown />
          </span>
          <span className="lang-icon">
            {" "}
            <MdLanguage />
          </span>
        </div>
      </nav>

      <div className="top-section">
        <div className="top-left-section">
          <img className="home-qapplogo " src={qapplogo} alt="qapp-logo" />

          <h1 className="multiple-service">Your Multiple Service APP</h1>
          <h4 className="seamless-uni">
            For a seamless universal banking and business experience.
          </h4>
        </div>
        <div className="top-right-section">
          <img className="network-logo " src={networklogo} alt="networklogo" />
          <img className="hand-image " src={handimage} alt="handimage" />
        </div>
      </div>

      <div className="download-section">
        <h4>Download The Future Now</h4>
        <div className="download-logos">
          <img
            className="appstore-download "
            src={appstoreDownload}
            alt="appstoreDownload"
          />
          <img
            className="playstore-download "
            src={playstoreDownload}
            alt="playstoreDownload"
          />
        </div>
      </div>
      <div className="information-section">
        <div className="financial-institutions">
          <div className="finance-container">
            {" "}
            <img
              className="finance-icon "
              src={financeIcon}
              alt="financeIcon"
            />
          </div>

          <h3 className="finance-title">Financial Institutions</h3>

          <h5 className="finance-info">
            {" "}
            This portal connects all the financial institutions across African
            countries which enables the customers manage all their bank accounts
            transactions and history in one APP.{" "}
          </h5>
          <img className="arrow-down1 " src={arrowDown} alt="arrowDown" />
        </div>
        <div className="merchant-services">
          <div className="merchant-container">
            <img
              className="merchant-icon "
              src={merchantIcon}
              alt="merchantIcon"
            />
          </div>

          <h3 className="merchant-title">Merchant Services</h3>

          <h5 className="merchant-info">
            {" "}
            This portal is for large and small scaled business owners,
            institutions or organizations to come leverage FREE OF CHARGE on our
            millions of already existing and active customer data base across
            African countries.
          </h5>
          <img className="arrow-down2 " src={arrowDown} alt="arrowDown" />
        </div>
        <div className="consumer-services">
          <div className="consumer-container">
            <img
              className="consumer-icon "
              src={consumerIcon}
              alt="consumerIcon"
            />
          </div>

          <h3 className="consumer-title">Consumer Services</h3>

          <h5 className="consumer-info">
            This portal is termed the “super app” to easily explain the quality,
            variety and super features yet in its easiest way.
          </h5>
          <img className="arrow-down3 " src={arrowDown} alt="arrowDown" />
        </div>
      </div>

      <div className="partnership">
        <h1 className="partner-title">Our Partnership</h1>

        <div className="partnership-logo">
          <img className="ecobank-logo " src={ecobankLogo} alt="ecobankLogo" />

          <img className="fasyl-logo " src={fasylLogo} alt="fasylLogo" />
          <img className="sg-logo " src={sgLogo} alt="sgLogo" />
          <img className="folixx-logo " src={folixxLogo} alt="folixxLogo" />
        </div>
      </div>

      <div className="footer">
        <ul>Privacy</ul>
        <ul>Terms</ul>
        <ul>FAQ</ul>
        <ul>Contact US</ul>
      </div>
    </div>
  );
}
