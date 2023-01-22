import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import peterthiel from "../pages/images/peter_thiel.jpg";
import linkedin from "../pages/images/linkedin.png";
import twitter from "../pages/images/twitter.png";


const ProfileHeader: NextPage = () => {
  return (
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
  );
};

export default ProfileHeader;