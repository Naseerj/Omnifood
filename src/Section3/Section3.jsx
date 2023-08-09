import React from "react";
import "./Section.css";
import meal1 from "../assets/img/meals/meal-1.jpg";
import meal2 from "../assets/img/meals/meal-2.jpg";

const Section3 = () => {
  return (
    <div>
      <div className="mealsdiv">
        <h2>Meals</h2>
        <h1>Omnifood AI chooses from 5,000+ recipes </h1>
        <div className="showcases">
        <div className="showcase1">
          <img src={meal1} alt="" />
          <button>MISCELLANEOUS</button>
          <p>Chakchouka</p>
          <p>96 calories</p>
          <p>Nutriscore</p>
          <p>2.6 rating</p>
        </div>
        <div className="showcase2">
          <img src={meal2} alt="" />
          <button>Dessert</button>
          <p>Parkin Cake</p>
          <p>439 calories</p>
          <p>Nutriscore</p>
          <p>2.2 rating</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
