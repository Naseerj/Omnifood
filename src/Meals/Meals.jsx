import React from "react";
import { useState, useEffect } from "react";
import "./Meals.css";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";

const Meals = ( ) => {
  const [api, setApi] = useState([]);
  const [dataGotten, setDataGotten] = useState("");
  const [btn, setBtn] = useState("");
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
        <button
          className="all"
          onClick={() => {
            setBtn("all");
          }}
        >
          All
        </button>
        <button
          className="side"
          onClick={() => {
            setBtn("side");
          }}
        >
          Side
        </button>
        <button className="beef">Beef</button>
        <button className="vegetarian">Vegetarian</button>
      </div>

      <div class={"loading-container " + (dataGotten ? 'hidden' : '')}>
            <div class="loading"></div>
            <div id="loading-text">loading</div>
          </div>

      <div className={"api " + (dataGotten ? "" : "hidden")}>
        {dataGotten ? (
          api.slice(1, 10).map((datum) => {
            const { strCategory, strMealThumb, idMeal, strMeal } = datum;
            return (
              <div className="" key={idMeal}>
                <div className="">
                  <div className="gridrender">
                    <div className="showcase1render">
                      <img className="mealb" src={strMealThumb} alt={strMeal} />
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
          })
        ) : ( 
          // <div class="loading-container">
          //   <div class="loading"></div>
          //   <div id="loading-text">loading</div>
          // </div>
          'yoo'
        )}
      </div>
    </div>
  );
};

export default Meals;
