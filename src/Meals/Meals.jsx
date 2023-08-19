import React from "react";
import { useState, useEffect } from "react";
import "./Meals.css";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import meala from "../assets/img/gallery/gallery-12.jpg";
import meal2 from "../assets/img/meals/meal-2.jpg";
import mealy from "../assets/img/gallery/gallery-1.jpg";
import mealb from "../assets/img/gallery/gallery-2.jpg";
import mealc from "../assets/img/gallery/gallery-3.jpg";
import meald from "../assets/img/gallery/gallery-4.jpg";
import meale from "../assets/img/gallery/gallery-5.jpg";
import mealf from "../assets/img/gallery/gallery-6.jpg";
import mealg from "../assets/img/gallery/gallery-7.jpg";
import mealh from "../assets/img/gallery/gallery-8.jpg";

const Meals = ({strMealThumb, strImageSource}) => {
  const [api, setApi] = useState([]);
  const [data, setDataGotten] = useState("");
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();

    const { meals } = result;
    setApi(meals);
    setDataGotten(true);
    console.log(meals);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="allmeal">
      <p>Meals</p>
      <h2>Omnifood chooses from 5000 recipes</h2>
      <div className="renderbtn">
        <button className="all">All</button>
        <button className="side">Side</button>
        <button className="beef">Beef</button>
        <button className="vegetarian">Vegetarian</button>
      </div>
      <div className="api">
        {api.slice(1, 10).map((datum) => {
          const {
            strArea,
            strCategory,
            strImageSource,
            strMealThumb,
            idMeal,
            strMeal,
          } = datum;
          return (
            <div className="" key={idMeal}>
              <div className="">
                  <div className="gridrender">
                    <div className="showcase1render">
                      <img className="mealb" src={strMealThumb} alt="" />
                      <div className="tagsdiv1">
                        <button>{strCategory}</button>
                        <h2>{strMeal}</h2>
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
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
