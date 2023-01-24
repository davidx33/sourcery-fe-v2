import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import cannabis from "../pages/images/cannabis.jpg";
import jobsandwoz from "../pages/images/jobsandwoz.jpg";

const WhySourcery: NextPage = () => {
  return (
    <div className="flex flex-col px-10 py-10">
      <h2 className="flex justify-center text-8xl text-white text-center ">
        Why Sourcery?
      </h2>
      <div className="flex flex-col md:flex-row text-white md:text-left text-5xl pt-16 md:px-10 justify-evenly items-center">
        <div className="flex flex-col text-white pr-5 md:w-1/3">
          <h2 className="pt-5 text-5xl font-bold">
            Monetize your domain expertise
          </h2>
          <h3 className="text-xl pt-5">
            Chances are you spend lots of time reading about new companies,
            ideas, and founders in the industry you care about. Keep track of
            that info on our platform, and get paid for it.
          </h3>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={cannabis} alt="" width={390} height={390} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-white md:text-left text-5xl pt-8 md:px-10 justify-evenly items-center">
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={jobsandwoz} alt="" width={390} height={390} />
          </div>
        </div>
        <div className="flex flex-col text-white pr-5 md:w-1/3">
          <h2 className="pt-5 text-5xl font-bold">Source the next big thing</h2>
          <h3 className="text-xl pt-5">
            Looking for jobs in entrepreneurship or venture capital? Need a
            better way to track up and coming players in your industry? Top
            sorcerers 🧙 will be connected to our venture partners for interview
            and networking opportunities.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhySourcery;
