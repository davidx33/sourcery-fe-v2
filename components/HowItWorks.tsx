import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import ramp from "../pages/images/ramplogo.png";
import earlybezos from "../pages/images/bezosearly.jpg";
import ipo from "../pages/images/ipo.jpg";
import Link from "next/link";

const HowItWorks: NextPage = () => {
  return (
    <div className="flex flex-col py-20">
      <h1 className="text-center font-bold pb-10 text-8xl">How it works</h1>
      <div className="bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
        <div className="flex flex-col px-5 py-16">
          <h1 className="text-5xl text-center">
            Source companies for VCs. Make money.
          </h1>
          <div className="flex flex-col md:flex-row justify-evenly pt-10">
            <div className="flex flex-col items-center text-white bg-neutral-800 rounded-lg md:w-1/4">
              <div className="px-10 py-5">
                <Image src={ramp} alt="" width={150} height={150} />
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
            <div className="flex flex-col items-center text-white bg-neutral-800 rounded-lg md:w-1/4">
              <div className="px-10 py-5">
                <Image src={earlybezos} alt="" width={390} height={390} />
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
            <div className="flex flex-col items-center text-white bg-neutral-800 rounded-lg md:w-1/4">
              <div className="px-10 py-3">
                <Image src={ipo} alt="" width={390} height={390} />
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
        <div className="flex justify-center pb-16">
          <button className="bg-white text-black rounded-full">
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
