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
      <div className="flex flex-row justify-end">
        <div className="pr-3">
          <button
            onClick={() => {
              setIsVC(false);
            }}
            className={
              !isVC
                ? "bg-white text-black px-3 py-3 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
                : "bg-white text-black px-3 py-3 rounded-full"
            }
          >
            I'm not a VC
          </button>
        </div>
        <div className="pl-3">
          <button
            onClick={() => {
              setIsVC(true);
            }}
            className={
              isVC
                ? "bg-white text-black px-3 py-3 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
                : "bg-white text-black px-3 py-3 rounded-full"
            }
          >
            I am a VC
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
          <WhySourceryVC />
        </div>
      )}
    </div>
  );
};

export default VCorNot;
