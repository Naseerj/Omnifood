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
        <div>
        <img src={meal1} alt="" />
        <button>Miscellaneous</button>
        <p>chakchouka</p>
        </div>
        <img src={meal2} alt="" />
      </div>
    </div>
  );
};

export default Section3;
