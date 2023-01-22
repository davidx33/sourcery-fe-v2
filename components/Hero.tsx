import React from "react";
import type { NextPage } from "next";
import Image from 'next/image';
import mac_payouts_sketch from "../pages/images/macbook_sketch_payouts.png"
import SignUpButton from "./SignUpButton";

const Hero: NextPage = () => {
  return (
    <div className="flex flex-row text-left py-8 justify-between px-20 items-center">
      <div className="flex flex-col w-2/4">
        <div className="text-8xl">
          <h2 className="text-left text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent">
            Find Companies. Get Paid.
          </h2>
        </div>
        <div className="text-white text-left text-2xl pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div className="pt-5 flex flex-row items-center">
          <SignUpButton />
          <h1 className="text-white pl-5">Contact sales ➞</h1>
        </div>
      </div>
      <div className="flex flex-row ">
        <Image src={mac_payouts_sketch} alt="" />
      </div>
    </div>
  );
};

export default Hero;
