import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import SignUpButton from "./SignUpButton";
import scale_ai from "../pages/images/circlescaleAI.png";
import anduril from "../pages/images/anduril.jpg";
import palantir from "../pages/images/palantir_black.jpg";
import faire from "../pages/images/fairelogo.jpg";
import stripe from "../pages/images/stripelogo.png";
import reddit from "../pages/images/reddit.png";
import kalshi from "../pages/images/kalshi.jpg";
import titan from "../pages/images/titanlogo.jpg";
import donotpay from "../pages/images/donotpay.jpg";
import boom from "../pages/images/boomlogo.jpg";
import openai from "../pages/images/openai.jpg";
import ramp from "../pages/images/ramp.jpg";
import whatnot from "../pages/images/whatnot.jpg"
import brex from "../pages/images/brexsquare.jpg";
import clickup from "../pages/images/clickup.jpg";
import deel from "../pages/images/deel.jpg";
import gusto from "../pages/images/gusto.jpg";
import plaid from "../pages/images/plaid.jpg";
import rippling from "../pages/images/ripplingsquare.jpg";
import zepto from "../pages/images/zepto.jpg";


const Hero: NextPage = () => {
  return (
    <div className= "flex md:flex-row flex-col bg-slate-100 text-left py-28 justify-between px-20 items-center" >
      <div className="flex flex-col md:w-2/4 md:pr-0">
        <div>
          <h2 className="text-left text-5xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent">
            Find Companies. Get Paid.
          </h2>
        </div>
        <div className=" text-left text-xl pt-8">
        Sign up, take notes on startups you like, and receive $1,000 cash if one of our venture partners invests.
        </div>
        <div className="pt-5 flex flex-row items-center">
          <SignUpButton />
        </div>
      </div>
      <div className="flex flex-row pt-10 md:w-2/4 md:pl-16">
        <div>
          <Image
            src={titan}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={150}
            height={150}
          />
          <Image
            src={donotpay}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={90}
            height={90}
          />
          <Image
            src={boom}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={200}
            height={200}
          />
        </div>
        <div>
        <Image
            src={whatnot}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={100}
            height={100}
          />
          <Image
            src={zepto}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={120}
            height={120}
          />
          <Image
            src={brex}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            src={ramp}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={200}
            height={200}
          />
          <Image
            src={faire}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={90}
            height={90}
          />
          <Image
            src={rippling}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={150}
            height={150}
          />
         
        </div>
        
        <div>
          <Image
            src={palantir}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={100}
            height={100}
          />
          <Image
            src={stripe}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={220}
            height={220}
          />
          <Image
            src={clickup}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={90}
            height={90}
          />
           
        </div>

        <div>
          <Image
            src={scale_ai}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={200}
            height={200}
          />
          <div className="flex flex-row">
          <Image
            src={anduril}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={90}
            height={90}
          />
          </div>
          
          <Image
            src={kalshi}
            alt=""
            className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce"
            width={150}
            height={150}
          />
       
        </div>
      </div>
    </div>
  );
};

export default Hero;
function componentDidMount() {
  throw new Error("Function not implemented.");
}
