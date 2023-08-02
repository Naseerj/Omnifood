import React from "react";
import "./Plans.css";
import check from "../assets/check.svg";
import x from "../assets/x (2).svg";

const Plans = () => {
  return (
    <div>
      <div className="pricingdiv">
        <h5>Pricing</h5>
        <h2>Eating well without breaking the bank</h2>
        <div className="price-1">
          <h3>STARTER</h3>
          <h1>
            <sub>$</sub>399
          </h1>
          <p>per month. That's just $13 per meal!</p>
          <div>
            {" "}
            <img src={check} alt="" />1 meal per day
          </div>
          <div>
            <img src={check} alt="" />
            Order from 11am and 9pm
          </div>
          <div>
            <img src={check} alt="" />
            Delivery is free
          </div>
          <div>
            <img src={x} alt="" />
            Get access to latest recipes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
