import React, { use, useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import investordashboard from "../pages/images/investordashboard.png";

const ImAVC: NextPage = () => {
  return (
    <div className="flex flex-col py-10 scroll-smooth">
      <h1 className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        I'm a VC
      </h1>
      <h2 className="text-2xl w-full md:w-1/3 font-bold pt-3">
        Unlock access to free deal flow. Every week.
      </h2>
      <div>
        <h2 className="md:w-1/3 w-full pt-3">
          Review hundreds of new companies sourced by industry experts every
          week, organized by the metrics you care about.
        </h2>
      </div>

      <div className="flex justify-center pt-6">
        <Image src={investordashboard} width={800} height={800} alt="" />
      </div>
    </div>
  );
};

export default ImAVC;
