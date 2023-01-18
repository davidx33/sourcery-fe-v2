import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="flex flex-col px-10 py-10">
      <h1 className="text-center">Why Sourcery?</h1>
      <div className="flex flex-row pt-10">
        <div className="bg-gradient-to-r from-violet-700 to-blue-300 w-2/4 text-left">
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
        <div className="text-left bg-gradient-to-r from-violet-700 to-blue-300 text-white text-2xl px-10 py-10 flex flex-col w-2/4">
          <h1>Companies sourced by experts. Get detailed analysis on startups from those with domain expertise in: </h1>
          <h1 className="py-10">
              <span className="type-industries text-5xl text-extrabold"></span>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
