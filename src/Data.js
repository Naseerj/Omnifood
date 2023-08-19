// import React from "react";

import { useState, useEffect } from "react";
import "./Data.css";

const Data = () => {
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
    <div className="api">
      {api.slice(1,9).map((datum) => {
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
              <img src={strMealThumb} alt="" />
              <h2>{strMeal}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
