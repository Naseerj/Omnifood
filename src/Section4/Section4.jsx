import React from "react";
import "./Section4.css";
import dave from "../assets/img/customers/dave.jpg";
import ben from "../assets/img/customers/ben.jpg";
import hannah from "../assets/img/customers/hannah.jpg";
import steve from "../assets/img/customers/steve.jpg";
import meal1 from "../assets/img/gallery/gallery-1.jpg";
import meal2 from "../assets/img/gallery/gallery-2.jpg";
import meal3 from "../assets/img/gallery/gallery-3.jpg";
import meal4 from "../assets/img/gallery/gallery-4.jpg";
import meal5 from "../assets/img/gallery/gallery-5.jpg";
import meal6 from "../assets/img/gallery/gallery-6.jpg";
import meal7 from "../assets/img/gallery/gallery-7.jpg";
import meal8 from "../assets/img/gallery/gallery-8.jpg";
import meal9 from "../assets/img/gallery/gallery-9.jpg";
import meal10 from "../assets/img/gallery/gallery-10.jpg";
import meal11 from "../assets/img/gallery/gallery-11.jpg";
import meal12 from "../assets/img/gallery/gallery-12.jpg";
import {meals} from '../Meals/Meals'



const Section4 = () => {
  return (
    <div>
      <div className="testimonial">
        <div>
          <h2>Testimonials</h2>
          <h1>Once you try it, you can't go back</h1>
          <div className="reviews">
            <div className="davediv">
              <img src={dave} alt="" />
              <p>
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </p>
              <p>-Dave Bryson</p>
            </div>
            <div className="hannahdiv">
              <img src={hannah} alt="" />
              <p>
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </p>
              <p> - Hannah Smith</p>
            </div>
            <div className="stevediv">
              <img src={steve} alt="" />
              <p>
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </p>
              <p> - Steve Miller</p>
            </div>
            <div className="bendiv">
              <img src={ben} alt="" />
              <p>
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </p>
              <p>Ben Hadly</p>
            </div>
          </div>
        </div>
        <div className="gridMeal">
          <img src={meal1} alt="" />
          <img src={meal2} alt="" />
          <img src={meal3} alt="" />
          <img src={meal4} alt="" />
          <img src={meal5} alt="" />
          <img src={meal6} alt="" />
          <img src={meal7} alt="" />
          <img src={meal8} alt="" />
          <img src={meal9} alt="" />
          <img src={meal10} alt="" />
          <img src={meal11} alt="" />
          <img src={meal12} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Section4;
