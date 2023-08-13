import React from "react";
import "./Plans.css";
import check from "../assets/check.svg";
import x from "../assets/x (2).svg";
import { IoInfiniteOutline } from "react-icons/io5";
import { IoNutritionOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";

const Plans = () => {
  return (
    <div>
      <div className="pricingdiv">
        <h5>Pricing</h5>
        <h2>Eating well without breaking the bank</h2>
        <div className="priceslist">
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
            <button className="btn-1">Get Plan</button>
          </div>
          <div className="yellowtag"> BEST VALUE</div>
          <div className="price-2">
            <h3>COMPLETE</h3>
            <h1>
              <sub>$</sub>649
            </h1>
            <p>per month. That's just $11 per meal!</p>
            <div>
              {" "}
              <img src={check} alt="" />
              <strong>2 meal</strong> per day
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
            <button className="btn-1">Get Plan</button>
          </div>
        </div>
      </div>
      <p>
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>
      <div className="linediv">
        <div className="infinitydiv">
          <div className="infinity"><IoInfiniteOutline/></div>
          <h2>Never cook again</h2>
          <p>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="leafdiv">
         <div className="leaf"> <IoLeafOutline/></div>
          <h2>Local and organic!</h2>
          <p>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="nutritiondiv">
          <IoNutritionOutline className="nutrition" />
          <h2>No waste</h2>
          <p>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="pausediv">
          <IoPauseOutline className="pause" />
          <h2>Pause anytime!</h2>
          <p>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
