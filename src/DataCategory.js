import React from "react";
import { useState, useEffect } from "react";
// import btn from '../src/Meals/Meals.jsx'
import Meals from "../src/Meals/Meals.jsx";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const DataCategory = () => {
  const [apiCategory, setapiCategory] = useState([]);
  const { btn } = Meals();

  const category = btn;

  const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const fetchDataCategory = async () => {
    const res = await fetch(url2);
    const result = await res.json();
    const { meals } = result;
    setapiCategory(filteredMeals);
    console.log(meals);
    const filteredMeals = result.meals.filter(
      (meal) => meal.strCategory === "Side"
    );
    console.log(filteredMeals);
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <div>
      {apiCategory.map((category) => {
        const { strCategory, strMealThumb, idMeal, strMeal } = category;
        return (
          <div key={idMeal}>
            <div className="">
              <div className="gridrender">
                <div className="showcase1render">
                  <img className="mealb" src={strMealThumb} alt={strMeal} />
                  <div className="tagsdiv1">
                    <button>{strCategory}</button>
                    <h2>{strMeal}</h2>
                    <p>
                      {" "}
                      <span><IoFlameOutline />{" "}</span>
                      {Math.floor(Math.random() * 100)} calories
                    </p>
                    <p>
                      {" "}
                      <span><IoRestaurantOutline />{" "}</span>
                      Nutriscore
                    </p>
                    <p>
                      {" "}
                      <span><IoStarOutline />{" "}</span>
                      {Math.floor(Math.random() * 5)} rating ® 5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return { apiCategory, category };
};

export default DataCategory;
