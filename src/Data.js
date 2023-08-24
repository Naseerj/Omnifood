import React from 'react'
import { useState, useEffect } from "react";


const Data = () => {
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
  return {api,  dataGotten}
}

export default Data;