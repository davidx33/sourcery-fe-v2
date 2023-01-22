import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import ProfileHeader from "../components/ProfileHeader";
import peterthiel from "../pages/images/peter_thiel.jpg";
import linkedin from "../pages/images/linkedin.png";
import twitter from "../pages/images/twitter.png";
import circlescale from "../pages/images/circlescaleAI.png";
import robinhood from "../pages/images/robinhoodlogo.png";
import roblox from "../pages/images/roblox.jpg";
import anduril from "../pages/images/anduril.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RecommendedToReview: NextPage = () => {
  return (
    <div>
      <div className="px-10 py-10 bg-neutral-800 rounded-xl">
        <div className="flex flex-col">
          <div className="text-white text-2xl font-extrabold pb-10">
            Recommended companies to review:
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-row">
              <Image
                src={roblox}
                alt=""
                width={90}
                height={90}
                className="rounded-full"
              />
              <div className="flex flex-col pl-5 items-center">
                <h1 className="text-white text-2xl font-bold pb-3">Roblox</h1>
                <button className="bg-white px-2 py-2 rounded-full">
                  Review now
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={robinhood}
                alt=""
                width={90}
                height={90}
                className="rounded-full"
              />
              <div className="flex flex-col pl-5 items-center">
                <h1 className="text-white text-2xl font-bold pb-3">
                  Robinhood
                </h1>
                <button className="bg-white px-2 py-2 rounded-full">
                  Review now
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={anduril}
                alt=""
                width={90}
                height={90}
                className="rounded-full"
              />
              <div className="flex flex-col pl-5 items-center">
                <h1 className="text-white text-2xl font-bold pb-3">Anduril</h1>
                <button className="bg-white px-2 py-2 rounded-full">
                  Review now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedToReview;
