import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import curvedarrow from "../pages/images/curvedarrow.png";

const HowItWorksVC: NextPage = () => {
  return (
    <div className="flex flex-col py-20 px-20">
      <div className="flex flex-row">
        <h1 className=" text-black text-4xl">
          We believe traditional education doesn’t give students the opportunity
          to fully explore the value in different perspectives and beliefs.
        </h1>
        <div className="flex flex-col">
          <h1 className="text-black font-semibold text-3xl">The Problem</h1>
          <div className="pt-3">
            <h3 className="text-black">
              Research on modern education and classroom environments notes a
              deficit in student exposure to and exploration of different
              cultures, perspectives, and circumstances. When we cultivate this
              exposure, students gain the knowledge and skills necessary to
              function in an increasingly diverse and complex society. It
              fosters empathy and creativity, and combats prejudice.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <Image src={curvedarrow} alt="" width={200} height={200} />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col pr-16">
          <h1 className="text-black font-semibold text-3xl">The Problem</h1>
          <div className="pt-3">
            <h3 className="text-black">
              Research on modern education and classroom environments notes a
              deficit in student exposure to and exploration of different
              cultures, perspectives, and circumstances. When we cultivate this
              exposure, students gain the knowledge and skills necessary to
              function in an increasingly diverse and complex society. It
              fosters empathy and creativity, and combats prejudice.
            </h3>
          </div>
        </div>
        <h1 className=" text-black text-4xl">
          We believe traditional education doesn’t give students the opportunity
          to fully explore the value in different perspectives and beliefs.
        </h1>
      </div>
    </div>
  );
};

export default HowItWorksVC;
