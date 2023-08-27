import React from "react";
import { useState, useEffect } from "react";
// import btn from '../src/Meals/Meals.jsx'
import Meals from "../src/Meals/Meals.jsx";

const DataCategory = () => {
  const [apiCategory, setapiCategory] = useState([]);
  const {btn} = Meals()

  const category = btn;

  const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;


  const fetchDataCategory = async () => {
    const res = await fetch(url2);
    const result = await res.json();
    const { meals } = result;
    setapiCategory(meals);
    console.log(meals);
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return { apiCategory, category };
};

export default DataCategory;
