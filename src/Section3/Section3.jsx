import React from "react";
import "./Section.css";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";

import meal1 from "../assets/img/meals/meal-1.jpg";
import meal2 from "../assets/img/meals/meal-2.jpg";

const Section3 = () => {
  return (
    <div>
      <h2>Meals</h2>
      <h1>Omnifood AI chooses from 5,000+ recipes </h1>
      <div className="mealsdiv">
        <div className="showcases">
          <div className="showcase1">
            <img src={meal1} alt="" />
            <div className="tagsdiv1">
              <button>MISCELLANEOUS</button>
              <h2>Chakchouka</h2>
              <p>
                {" "}
                <span>
                  <IoFlameOutline />{" "}
                </span>
                96 calories
              </p>
              <p>
                {" "}
                <span>
                  <IoRestaurantOutline />{" "}
                </span>
                Nutriscore
              </p>
              <p>
                {" "}
                <span>
                  <IoStarOutline />{" "}
                </span>
                2.6 rating ® 5
              </p>
            </div>
          </div>
          <div className="showcase2">
            <img src={meal2} alt="" />
            <div className="tagsdiv2">
              <button>DESSERT</button>
              <h2>Parkin Cake</h2>
              <p className="pre">
                {" "}
                <span>
                  <IoFlameOutline />
                </span>{" "}
                <p>439 calories</p>
              </p>
              <p className="pre2">
                {" "}
                <span>
                  <IoRestaurantOutline />
                </span>{" "}
                <p>Nutriscore</p>
              </p>
              <p className="pre3">
                {" "}
                <span>
                  <IoStarOutline />{" "}
                </span>{" "}
                <p>2.2 rating ® 2</p>
              </p>
            </div>
          </div>
        </div>
        <div className="ideals">
          <h1>Works with any diet:</h1>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Vegetarian
          </p>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Vegen
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Gluten-free
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Pescatarian
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Lactose-free
          </p>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Keto
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Paleo
          </p>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            Kid-friendly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
