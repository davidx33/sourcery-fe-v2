import React, { useState } from "react";
import type { NextPage } from "next";
import WhySourceryVC from "./WhySourceryVC";
import HowItWorksVC from "./HowItWorksVC";
import HowItWorks from "./HowItWorks";
import WhySourcery from "./WhySourcery";

// implementation:
// have each button click change state. based on what state is toggled to, display some various imported components

const VCorNot: NextPage = () => {
  const [isVC, setIsVC] = useState(false);
  return (
    <div className="text-white px-10 ">
      <div className="flex flex-row justify-center py-10">
        <div className="pr-3">
          <button
            onClick={() => {
              setIsVC(false);
            }}
            className={
              !isVC
                ? "text-black border border-black  px-8 rounded-full text-7xl"
                : "text-black px-8 rounded-full text-7xl"
            }
          >
            <h2 className="italic">I'm not a VC</h2>
          </button>
        </div>
        <div className="pl-3">
          <button
            onClick={() => {
              setIsVC(true);
            }}
            className={
              isVC
                ? "text-black border border-black  px-8 rounded-full  text-7xl "
                : "text-black px-8 rounded-full text-7xl "
            }
          >
            <h2 className="italic">I'm a VC</h2>
          </button>
        </div>
      </div>
      {!isVC ? (
        <div className="flex flex-col">
          <HowItWorks />
          <WhySourcery />
        </div>
      ) : (
        <div className="flex flex-col">
          <HowItWorksVC />
        </div>
      )}
    </div>
  );
};

export default VCorNot;
