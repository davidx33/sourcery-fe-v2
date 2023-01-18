import React from "react";
import type { NextPage } from "next";
import Image from 'next/image';
import macsketch from "./images/macsketch.png";
import iphonesketch from "./images/iphonesketch.png"

const Hero: NextPage = () => {
  return (
    <div className="flex flex-row text-left py-8 justify-between px-10 items-center">
      <div className="flex flex-col w-2/4">
        <div className="text-8xl">
          <h2 className="text-left text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent ">
            Find companies. Get paid.
          </h2>
        </div>
        <div className="text-white text-left text-2xl pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div className="pt-5 flex flex-row items-center">
          <button className="bg-white py-3 px-3 rounded-md pr-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Sign up</button>
          <h1 className="text-white pl-5">Contact sales ➞</h1>
        </div>
      </div>
      <div className="flex flex-row ">
        <Image src={macsketch} alt=""/>
        </div>
    </div>
  );
};

export default Hero;
