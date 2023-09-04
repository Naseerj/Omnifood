import React from "react";
import "./Footer.css";
import logo from "../assets/img/omnifood-logo.png";
import instagram from "../assets/img/logos/instagram (1).svg";
import facebook from "../assets/img/logos/facebook (1).svg";
import twitter from "../assets/img/logos/twitter (2).svg";

const Footer = () => {
  return (
    <footer className="footie">
      <div className="logodiv2">
        <img className="logof" src={logo} alt="" />
        <section className="socials">
          <img className="ig" src={instagram} alt="" />
          <img className="fb" src={facebook} alt="" />
          <img className="twt" src={twitter} alt="" />
        </section>
        <h4>Copyright © 2022 by Omnifood, Inc. All rights reserved.</h4>
      </div>
      <div className="tes">
        <h2>Contact us</h2>
        <p>
          623 Harrison St., 2nd Floor, <br /> San Francisco, CA 94107
        </p>
        <p>
          415-201-6370 <br /> hello@omnifood.com
        </p>
      </div>
      <div className="tes">
        <h2>Account</h2>
        <p>Create account</p>
        <p>Sign in</p>
        <p>iOS app</p>
        <p>Android app</p>
      </div>
      <div className="tes">
        <h2>Company</h2>
        <p>About omnifood</p>
        <p>For business</p>
        <p>Cooking partners</p>
        <p>Careers</p>
      </div>
      <div className="tes">
        <h2>Resources</h2>
        <p>Recipe directory</p>
        <p>Help center</p>
        <p>Privacy & terms</p>
      </div>
    </footer>
  );
};

export default Footer;
