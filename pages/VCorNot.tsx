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
    <div className="text-white px-10 pt-8">
      <div className="flex flex-row justify-center py-10">
        <button
          onClick={() => { setIsVC(false) }}
          className={
            !isVC
              ? "text-white px-8 rounded-full font-semibold text-7xl"
              : "text-gray-700 px-8 rounded-full font-semibold text-7xl"
          }
        >
          I'm not a VC
        </button>
        <button
          onClick={() => { setIsVC(true) }}
          className={
            isVC
              ? "text-white-400 px-8 rounded-full font-semibold text-7xl"
              : "text-gray-700 px-8 rounded-full font-semibold text-7xl"
          }
        >
          I am a VC
        </button>
      </div>
      {!isVC ? (
        <div className="flex flex-col">
          <HowItWorks />
          <WhySourcery />
        </div>
      ) : (
        <div className="flex flex-col">
          <HowItWorksVC />
          <WhySourceryVC />
        </div>
      )}
    </div>
  );
};

export default VCorNot;
