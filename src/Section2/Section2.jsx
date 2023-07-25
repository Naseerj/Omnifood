import React from "react";
import "./Section2.css";
import logo1 from "../assets/img/logos/business-insider.png";
import logo2 from "../assets/img/logos/forbes.png";
import logo3 from "../assets/img/logos/techcrunch.png";
import logo4 from "../assets/img/logos/the-new-york-times.png";
import logo5 from "../assets/img/logos/usa-today.png";
import screen1 from '../assets/img/app/app-screen-1.png'

const Section2 = () => {
  return (
    <div className="ovrdiv">
      <p>As featured in</p>
      <div className="logodiv">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img className="nyt" src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
      <div>
        <h5>How it works</h5>
        <h1>Your daily dose of health in 3 simple steps </h1>
        <div className="screens">
         <div className="screentext1">
         <h1>01</h1>
          <p>Tell us what you like (and what not)</p>
          <p>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
         </div>
          <img src={screen1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
