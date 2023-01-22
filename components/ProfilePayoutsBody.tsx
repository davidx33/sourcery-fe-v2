import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import insightpartners from "../pages/images/insight.jpg"
import sequioa from "../pages/images/Sequoia.png";
import batteryventures from "../pages/images/batteryventures.png";



const ProfilePayoutsBody: NextPage = () => {
  return (
    <div className="flex flex-col px-16 pt-8 bg-black">
      <div className="flex flex-row justify-evenly items-center py-10">
        <Image src={insightpartners} alt="" width={300} height={300}/>
        <h1 className="text-white">
            Insight Partners paid you $250
        </h1>
      </div>
      <div className="flex flex-row justify-evenly items-center py-10">
        <Image src={sequioa} alt="" width={300} height={300}/>
        <h1 className="text-white">
            Sequioa Capital paid you $550
        </h1>
      </div>
      <div className="flex flex-row justify-evenly items-center py-10">
        <Image src={batteryventures} alt="" width={300} height={300}/>
        <h1 className="text-white">
            Battery Ventures paid you $900
        </h1>
      </div>
    </div>
  );
};

export default ProfilePayoutsBody;