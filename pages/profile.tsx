import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import peterthiel from "../pages/images/peter_thiel.jpg";
import linkedin from "../pages/images/linkedin.png";
import twitter from "../pages/images/twitter.png";
import circlescale from "../pages/images/circlescaleAI.png";
import robinhood from "../pages/images/robinhoodlogo.png";
import roblox from "../pages/images/roblox.jpg";
import anduril from "../pages/images/anduril.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile: NextPage = () => {
  return (
    <div className="bg-black px-16">
      <div className="pb-10">
        <Navbar />
      </div>
      <div className="px-10 py-10 bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-xl">
        <div className="flex flex-row items-center justify-center">
          <Image
            src={peterthiel}
            alt=""
            className="rounded-xl"
            width={200}
            height={200}
          />
          <div className="flex flex-col pl-10">
            <h1 className="text-white font-bold text-3xl pb-2">Peter Thiel</h1>
            <h1 className="text-white text-extrabold text-xl">
              thexudavid@gmail.com
            </h1>
            <div className="flex flex-row pt-3">
              <Image
                src={linkedin}
                alt=""
                width={50}
                height={50}
                className="pr-2"
              />
              <Image
                src={twitter}
                alt=""
                width={50}
                height={50}
                className="pl-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-10 bg-neutral-800 rounded-xl">
        <div className="flex flex-col">
          <div className="text-white text-2xl font-extrabold">
            My companies:
          </div>
          <div className="flex flex-row pt-10 items-center justify-between pb-5">
            <div className="flex flex-row items-center">
              <Image
                src={circlescale}
                alt=""
                width={90}
                height={90}
                className="rounded-full"
              />
              <h1 className="text-3xl pl-5 text-white">Scale AI</h1>
            </div>
            <div className="flex flex-row">
              <Image
                src={linkedin}
                alt=""
                width={50}
                height={50}
                className="pr-3"
              />
              <Image
                src={twitter}
                alt=""
                width={50}
                height={50}
                className="pl-3"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="pr-3">
              <button className="bg-white rounded-full px-3 py-3">
                Source new company
              </button>
            </div>
            <div className="pl-3">
              <button className="bg-white rounded-full px-3 py-3">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
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
      <Footer />
    </div>
  );
};

export default Profile;
