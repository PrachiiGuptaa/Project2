import React from "react";
import PricingStyle from './Pricing.module.css'
import { AiOutlineArrowRight } from "react-icons/ai";


function Priseing(){

    return(
        <div className={PricingStyle.wrap}>
    <div className={PricingStyle.day}>
    <p>Day Pass</p>
    <p><sup style={{fontSize:"2em"}}>$</sup> <span className={PricingStyle.price}><sub>20</sub></span><br/><span>/pass</span></p>
    
    <ul>
      <li>1 Day Pass</li> 
      <li>Free Gym Access</li>
      <li>24 Hours Access</li>
      </ul>
      <button className={PricingStyle.btn}>GET STARTED</button>
    </div>
    <div className={PricingStyle.month}>
    <p>Month to Month</p>
    <p><sup style={{fontSize:"2em"}}>$</sup><span className={PricingStyle.price}><sub>90 </sub></span><br/><span><em>/month</em></span></p>
   
    <ul>
      <li>$99 Joining Fee</li> 
      <li>No Contract</li>
      <li>Free Gym Access</li>
      <li>1 Group Class Included</li>
      <li>24 Hours Access</li>
      </ul>
      <button className={PricingStyle.btn}>GET STARTED</button>
      </div>
      <div className={PricingStyle.content}>
        <h3 style={{ fontFamily: "Colonna MT" ,textShadow: "2px 2px black"}}>Membership</h3>
        <h1 style={{ fontFamily: "Colonna MT" ,textShadow: "2px 2px black"}}>From Punch Pass to Monthly or Annual</h1>
        <p>At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we won't tie you in to a long term contract, giving you greater flexibility.
</p>
<h3 style={{ fontFamily: "Colonna MT" ,textShadow: "2px 2px black"}}>Each plan included
</h3>
<ul className={PricingStyle.list}>
  <li className={PricingStyle.li}><AiOutlineArrowRight/> The best equipment global brands </li>
  <li className={PricingStyle.li}> <AiOutlineArrowRight/> The gym is open 24 hours a day, 7 days a week </li>
  <li className={PricingStyle.li}> <AiOutlineArrowRight/> Two safe payment methods   </li>
  <li className={PricingStyle.li}> <AiOutlineArrowRight/> Two safe payment methods  </li>
  <li className={PricingStyle.li}> <AiOutlineArrowRight/> Group fitness classes in the price of the subscription  </li>
  <li className={PricingStyle.li}> <AiOutlineArrowRight/> No long-term contract, period  </li>
  </ul>
        </div>
    </div>
    )
}
export default Priseing