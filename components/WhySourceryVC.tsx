import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="flex flex-col md:px-10 py-10">
      <h1 className="text-center text-7xl md:text-8xl">Why Sourcery?</h1>
      <div className="flex md:flex-row flex-col pt-16 justify-around">
        <div className="bg-gradient-to-r from-violet-700 to-blue-300 md:w-2/5 text-left rounded-xl">
          <div className="px-10 py-10">
            <h2 className="text-2xl">
              Access hundreds of companies in new dealflow every week. Sorted by
              the metrics you care about.
            </h2>
            <h1 className="py-10">
              <span className="type-metrics text-5xl text-extrabold"></span>
            </h1>
           
          </div>
        </div>
        <div className="text-left rounded-xl bg-gradient-to-r from-violet-700 to-blue-300 text-white text-2xl px-10 py-10 flex flex-col md:w-2/5 ">
          <h1>Get detailed analysis on startups sourced by those with domain expertise in: </h1>
          <h1 className="py-10">
              <span className="type-industries text-5xl text-extrabold"></span>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
