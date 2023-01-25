import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import curvedarrow from "../pages/images/curvedarrow.png";

const HowItWorksVC: NextPage = () => {
  return (
    <div className="flex flex-col py-20 px-20">
      <div className="flex flex-row items-center">
        <div className="w-2/4">
          <h1 className=" text-black text-4xl">
            Slow dealflow that monopolizes VC time and resources
          </h1>
        </div>

        <div className="flex flex-col w-2/4 pl-36">
          <h1 className="text-black font-semibold text-3xl">The Problem</h1>
          <div className="pt-3">
            <h3 className="text-black">
              VC analysts spend too much time sorting through company lists.
              Employees, students, and startup enthusiasts in every industry
              take notes on companies they like. We can improve sourcing
              infrastructure by leveraging the wisdom of these crowds
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <Image src={curvedarrow} alt="" width={200} height={200} />
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col pr-16 w-2/4">
          <h1 className="text-black font-semibold text-3xl">The Solution</h1>
          <div className="pt-3">
            <h3 className="text-black">
              Contact us to learn how you can access Sourcery’s dealflow for
              free. We filter data based on your investment constraints so you
              can quickly incorporate our list of startups, sourced by a diverse
              group of industry veterans
            </h3>
          </div>
        </div>
        <h1 className=" text-black text-4xl text-right">
          Access our deal flow for free
        </h1>
      </div>
    </div>
  );
};

export default HowItWorksVC;
