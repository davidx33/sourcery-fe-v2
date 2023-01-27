import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import sourcerdashboard from '../pages/images/sorcererdashboard.png'

const ImNotAVC: NextPage = () => {
  return (
    <div className="flex flex-col pt-10 scroll-smooth">
      <h1 className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        I'm not a VC
      </h1>
      <h2 className="text-2xl md:w-1/3 w-full font-bold pt-3">
        Sign up. Find companies for investors. Get paid.
      </h2>
      <div>
        <h2 className="md:w-1/3 w-full pt-3">
          Get $5 for every 5 companies sourced, and $1,000 for every company our
          venture partners invest in.
        </h2>
      </div>

      <div className="flex justify-center pt-6">
        <Image src={sourcerdashboard} width={800} height={800} alt=""/>
      </div>

    </div>
  );
};

export default ImNotAVC;
