import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import ramp from "./images/ramplogo.png";
import earlybezos from "./images/bezosearly.jpg";
import ipo from "./images/ipo.jpg";

const HowItWorks: NextPage = () => {
  return (
    <div className="flex flex-col py-20">
      <div className="text-center text-extrabold pb-10">
        <h1 className="text-8xl">How it works</h1>
      </div>
      <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
        <div className="flex flex-col px-5 py-16">
          <h1 className="text-5xl text-center">
            Source companies for VCs. Make money.
          </h1>
          <div className="flex flex-row justify-evenly pt-10">
            <div className="flex flex-col items-center text-white bg-neutral-800 rounded-lg w-1/4">
              <div className="px-10 py-10">
                <Image src={ramp} alt="" width={150} height={150} />
              </div>
              <div className="pb-10">
                <h2 className="text-3xl text-extrabold text-left px-10">
                  Find interesting companies
                </h2>
                <h2 className="pt-3 px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center text-white bg-neutral-800 rounded-lg w-1/4">
              <div className="px-10 py-10">
                <Image src={earlybezos} alt="" width={390} height={390} />
              </div>
              <div className="flex flex-col pb-10">
                <h2 className="text-3xl text-extrabold text-left px-10">
                  Provide your quick thoughts
                </h2>
                <h2 className="pt-3 px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center text-white bg-neutral-800 rounded-lg w-1/4">
              <div className="px-10 py-10">
                <Image src={ipo} alt="" width={390} height={390} />
              </div>
              <div className="pb-10">
                <h2 className="text-3xl text-extrabold text-left px-10">
                  Receive payouts from VCs
                </h2>
                <h2 className="pt-3 px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-16">
          <button className="bg-white text-black rounded-xl">
            <h2 className="px-5 py-5">Get started ➞</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
