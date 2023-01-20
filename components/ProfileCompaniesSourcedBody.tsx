import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Footer from "./Footer";
import airbnb from "../pages/images/airbnblogo.png";
import brex from "../pages/images/brexlogo.png";
import palantirlogo from "../pages/images/palantirlogo.png";

const ProfileBody: NextPage = () => {
  return (
    <div className="flex flex-col px-16 pt-8 bg-black">
      <div className="flex flex-row text-white justify-evenly">
        <div className="flex flex-col items-center">
          <div className="pb-10 text-2xl">Company name</div>
          <div className="pb-10">Airbnb</div>
          <div className="pb-10">Palantir</div>
          <div className="pb-10">Brex</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="pb-10 text-2xl">Date sourced</div>
          <div className="pb-10">10/02/2021</div>
          <div className="pb-10">
            11/12/2022
          </div>
          <div className="pb-10">2/17/2022</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="pb-10 text-2xl">Industry</div>
          <div className="pb-10">Consumer</div>
          <div className="pb-10">GovTech</div>
          <div className="pb-10">FinTech</div>
        </div>
      </div>

    </div>
  );
};

export default ProfileBody;
