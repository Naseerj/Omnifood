import React from "react";
import "./Section4.css";
import dave from "../assets/img/customers/dave.jpg";
import ben from "../assets/img/customers/ben.jpg";
import hannah from "../assets/img/customers/hannah.jpg";
import steve from "../assets/img/customers/steve.jpg";
import meals from "../Meals/Meals";
import Data from "../Data";

const Section4 = () => {
  const { api, dataGotten } = Data();
  console.log(api);
  return (
    <div>
      <div className="testimonial">
        <div className="reviews-all">
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
          {api.slice(9, 21).map((datum) => {
            const { strCategory, strMealThumb, idMeal, strMeal } = datum;
            return (
              <div>
                <img src="" alt="" key={idMeal} />
                <img src={strMealThumb} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
