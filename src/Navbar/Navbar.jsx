import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import omnifoodLogo from "../assets/img/omnifood-logo.png";

const Navbar = () => {
  return (
    <div className="cover">
      <div className="overalldiv">
        <Link to="/">
          {" "}
          <img className="omnilogo" src={omnifoodLogo} alt="" />
        </Link>
        <div className="linksdiv">
          <Link className="homelink" to="/"> Home</Link>
          <Link className="mealink" to="/meals">
            {" "}
            Meals
          </Link>
          <Link className="planleak" to="/plans">
            Plan
          </Link>
          <button className="login-btn">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-check"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
