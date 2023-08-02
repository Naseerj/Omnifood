import React from "react";
import "./Section1.css";
import heroImg from "../assets/img/hero.png";
import customer1 from "../assets/img/customers/customer-1.jpg";
import customer2 from "../assets/img/customers/customer-2.jpg";
import customer3 from "../assets/img/customers/customer-3.jpg";
import customer4 from "../assets/img/customers/customer-4.jpg";
import customer5 from "../assets/img/customers/customer-5.jpg";
import customer6 from "../assets/img/customers/customer-6.jpg";
import Section2 from "../Section2/Section2";

const Section1 = () => {
  return (
   <div>
     <div className="parentdiv">
      <div className="part1div">
        <h1 className="header1">
          A healthy meal delivered to your door, step every single day
        </h1>
        <h3 className="header3">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </h3>
        <div className="btndiv">
        <button className="btn1">Start eating well</button>
        <button className="btn2">Sign Up</button>
        </div>
        <div className="imgdiv">
          <img className="cus-1" src={customer1} alt="" />
          <img className="cus-2" src={customer2} alt="" />
          <img className="cus-3" src={customer3} alt="" />
          <img className="cus-4" src={customer4} alt="" />
          <img className="cus-5" src={customer5} alt="" />
          <img className="cus-6" src={customer6} alt="" />
        <p> <span className="number">250,000+</span>  meals delivered last year!</p>
        </div>
      </div>
      <div>
        <img className="heroImg" src={heroImg} alt="" />
      </div>
    </div>
   </div>
  );
};

export default Section1;
