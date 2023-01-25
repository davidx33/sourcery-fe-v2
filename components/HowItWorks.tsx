import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import ramp from "../pages/images/ramplogo.png";
import earlybezos from "../pages/images/bezosearly.jpg";
import ipo from "../pages/images/ipo.jpg";
import pencil from "../pages/images/pencil.png";
import money from "../pages/images/money.png";
import glasses from "../pages/images/glasses.png";
import Link from "next/link";

const HowItWorks: NextPage = () => {
  return (
    <div className="flex flex-col py-20">
      <h1 className="text-center  pb-10 text-8xl text-black">How it works</h1>
      <div className="rounded-xl">
        <div className="flex flex-col px-5 py-6">
          <div className="flex flex-col md:flex-row justify-evenly pt-10">
            <div className="flex flex-col items-center text-black  rounded-lg md:w-1/4">
              <div className="px-10 py-5">
                <Image src={pencil} alt="" width={150} height={150} />
              </div>
              <div className="pb-10">
                <div className="px-10">
                  <h2 className="text-3xl text-extrabold text-center pb-5">
                    Sign up
                  </h2>
                  <h2 className="text-lg text-center">
                    Make an account and answer a few questions about your
                    interests and work experience.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-black rounded-lg md:w-1/4">
              <div className="px-10 py-5">
                <Image src={glasses} alt="" width={390} height={390} />
              </div>
              <div className="px-10">
                <h2 className="text-3xl text-extrabold text-center pb-5">
                  Find companies
                </h2>
                <h2 className="text-lg text-center">
                  Take note of startups you come across at work, school, in the
                  news, or from your network
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center text-black rounded-lg md:w-1/4">
              <div className="px-10 py-3">
                <Image src={money} alt="" width={390} height={390} />
              </div>
              <div className="px-10">
                <h2 className="text-3xl text-extrabold text-center pb-5">
                  Get cash
                </h2>
                <h2 className="text-lg text-center">
                  Get $15 for every 5 companies sourced; $1,000 for every
                  company invested in by our venture partners
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <button className="bg-white text-black border-2 border-black rounded-full">
            <Link href="/profile">
              <h2 className="px-5 py-5">Get started ➞</h2>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
