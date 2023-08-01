import React from "react";
import "./Section2.css";
import logo1 from "../assets/img/logos/business-insider.png";
import logo2 from "../assets/img/logos/forbes.png";
import logo3 from "../assets/img/logos/techcrunch.png";
import logo4 from "../assets/img/logos/the-new-york-times.png";
import logo5 from "../assets/img/logos/usa-today.png";
import screen1 from "../assets/img/app/app-screen-1.png";
import screen2 from "../assets/img/app/app-screen-2.png";
import screen3 from "../assets/img/app/app-screen-3.png";

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

      <div className="instruction">
        <h5>How it works</h5>
        <h1>Your daily dose of health in 3 simple steps </h1>
        <div className="screens">
          <div className="screentext1">
            <h1 className="num1">01</h1>
            <p className="pfirst">Tell us what you like (and what not)</p>
            <p className="psecond">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="imgblock">
            <div className="design2">
              <div></div>
            </div>
          <img className="screen1" src={screen1} alt="" />
          </div>
        </div>
        <div className="screens2">
          <div className="imgblock">
            <img className="screen2" src={screen2} alt="" />
            <div className="design2">
              <div></div>
            </div>
          </div>
          <div className="screentext1">
            <h1 className="num1">02</h1>
            <p className="pfirst">Approve your weekly meal plan</p>
            <p className="psecond">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
          
        </div>

        <div className="screens3">
          <div className="screentext1">
            <h1 className="num1">03</h1>
            <p className="pfirst">Receive meals at convenient time</p>
            <p className="psecond">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div className="imgblock">
            <div className="design">
              <div></div>
            </div>
            <img className="screen3" src={screen3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
