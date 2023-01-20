import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import optin from "../pages/images/optin.png";
import receive from "../pages/images/receive.png";
import evaluate from "../pages/images/evaluate.png";
import steve from "../pages/images/stevejobs.png";
import greenlight from "../pages/images/optinimage.jpg";
import peterandmusk from "../pages/images/elonandpeter.jpg";

const HowItWorksVC: NextPage = () => {
  return (
    <div className="flex flex-col py-20">
      <h1 className="text-center font-bold pb-10 text-8xl">How it works</h1>
      <div className="flex flex-row text-white text-left text-5xl pt-16 px-10 justify-evenly items-center">
        <div className="flex flex-col text-white pr-5 w-1/3">
          <Image src={optin} alt="" width={80} height={80} />
          <h2 className="pt-5 text-5xl">Opt-in</h2>
          <h3 className="text-xl pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={greenlight} alt="" width={390} height={390} />
          </div>
        </div>
      </div>
      <div className="flex flex-row text-white text-left text-5xl pt-8 px-10 justify-evenly items-center">
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={steve} alt="" width={390} height={390} />
          </div>
        </div>
        <div className="flex flex-col text-white pr-5 w-1/3">
          <Image src={receive} alt="" width={80} height={80} />
          <h2 className="pt-5 text-5xl">Get access</h2>
          <h3 className="text-xl pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
      </div>
      <div className="flex flex-row text-white text-left text-5xl pt-8 px-10 justify-evenly items-center">
        <div className="flex flex-col text-white pr-5 w-1/3">
          <Image src={evaluate} alt="" width={80} height={80} />
          <h2 className="pt-5 text-5xl">Evaluate</h2>
          <h3 className="text-xl pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
          <div className="px-16 py-16">
            <Image src={peterandmusk} alt="" width={390} height={390} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksVC;
