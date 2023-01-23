import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import cannabis from "../pages/images/cannabis.jpg";
import jobsandwoz from "../pages/images/jobsandwoz.jpg"


const WhySourcery: NextPage = () => {
  return (
    <div className="flex flex-col px-10 py-10">
      <h2 className="flex justify-center text-8xl text-white ">
        Why Sourcery?
      </h2>
      <div className="flex flex-row text-white text-left text-5xl pt-16 px-10 justify-evenly items-center">
        <div className="flex flex-col text-white pr-5 w-1/3">
          <h2 className="pt-5 text-5xl">Monetize your domain expertise</h2>
          <h3 className="text-xl pt-5">
            Get paid for finding companies in industries you have extensive knowledge about.
          </h3>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={cannabis} alt="" width={390} height={390} />
          </div>
        </div>
      </div>
      <div className="flex flex-row text-white text-left text-5xl pt-8 px-10 justify-evenly items-center">
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={jobsandwoz} alt="" width={390} height={390} />
          </div>
        </div>
        <div className="flex flex-col text-white pr-5 w-1/3">
          <h2 className="pt-5 text-5xl">Source the next big thing</h2>
          <h3 className="text-xl pt-5">
            Be the first to discover a product that will change the world.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhySourcery;
