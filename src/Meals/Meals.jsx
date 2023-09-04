import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Meals.css";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import DataCategory from "../DataCategory";

const Meals = () => {
  const [api, setApi] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [dataGotten, setDataGotten] = useState("");
  const [btn, setBtn] = useState("");
  const [cats, setCats] = useState('')
  const hideApi = useRef();
 

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  let cat = cats;

  const changeCategory = () =>{
    
  }



  const filterCategory = () => {
    hideApi.current.style.display = "none";
    setCats('Vegetarian')
    // var cat = cat[1]
    
  };

  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();

    const { meals } = result;
    const filteredMeals = result.meals.filter(
      (meal) => meal.strCategory === cat
    );
    setApi(meals);
    setDataGotten(true);
    console.log(filteredMeals);
    setFilteredMeals(filteredMeals);
  };

  useEffect(() => {
    fetchData();
    // filterCategory();
  }, []);

  return (
    <div>
      <div className="allmeal">
        <p>MEALS</p>
        <h2>Omnifood AI chooses from 5,000+ recipes</h2>
        <div className="renderbtn">
          <button className="all">All</button>
          <button
            className="side"
            onClick={() => {
              setBtn("Side");
              filterCategory();
              changeCategory()
              console.log(cat)
              // changeSide()
            }}
          >
            Side
          </button>
          <button onClick={(()=>{
            setCats(['Beef'])
          })} className="beef">Beef</button>
          <button onClick={(()=>{
            setCats(['Vegetarian'])
          })} className="vegetarian">Vegetarian</button>
        </div>

        <div className={"loading-container " + (dataGotten ? "hidden" : "")}>
          <div className="loading"></div>
          <div id="loading-text">loading</div>
        </div>

        <div ref={hideApi} className={"api " + (dataGotten ? "" : "hidden")}>
          {dataGotten
            ? api.slice(1, 10).map((datum) => {
                const { strCategory, strMealThumb, idMeal, strMeal } = datum;
                return (
                  <div className="parentgrid" key={idMeal}>
                    <div className="">
                      <div className="gridrender">
                        <div className="showcase1render">
                          <img
                            className="mealb"
                            src={strMealThumb}
                            alt={strMeal}
                          />
                          <div className="tagsdiv1">
                            <button>{strCategory}</button>
                            <h2>{strMeal}</h2>
                            <p>
                              {" "}
                              <span>
                                <IoFlameOutline />{" "}
                              </span>
                              {Math.floor(Math.random() * 100)} calories
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
                              {Math.floor(Math.random() * 5)} rating ® 5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : // <div class="loading-container">
              //   <div class="loading"></div>
              //   <div id="loading-text">loading</div>
              // </div>
              "yoo"}
        </div>
      </div>
      <div className="categorisedDiv">
        {filteredMeals.map((category) => {
          const { strCategory, strMealThumb, idMeal, strMeal } = category;
          return (
            <div className="" key={idMeal}>
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
                    {Math.floor(Math.random() * 100)} calories
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
                    {Math.floor(Math.random() * 5)} rating ® 5
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  return { btn };
};

export default Meals;
