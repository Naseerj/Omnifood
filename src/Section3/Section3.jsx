import React from "react";
import "./Section.css";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import meal1 from "../assets/img/meals/meal-1.jpg";
import meal2 from "../assets/img/meals/meal-2.jpg";

import {Link} from 'react-router-dom'

const Section3 = () => {
  return (
    <div className="coverdiv">
      <h3>Meals</h3>
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
            <p>Vegetarian</p>
          </p>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p> Vegan</p>
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p>Gluten-free</p>
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p>Pescatarian</p>
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p>Lactose-free</p>
          </p>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p> Keto</p>
          </p>{" "}
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p>Paleo</p>
          </p>
          <p>
            <span>
              <MdDone />
            </span>{" "}
            <p>Kid-friendly</p>
          </p>
        </div>
      </div>

      <div className="previewdiv">
       <Link className="link1" to='meals'> <h4>See the recipes</h4>{" "}</Link>
        <span>
          {" "}
          <HiArrowNarrowRight />{" "}
        </span>{" "}
      </div>
      <div></div>
      {/* <HiMiniArrowLongRight/> */}
    </div>
  );
};

export default Section3;
