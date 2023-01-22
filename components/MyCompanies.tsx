import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import linkedin from "../pages/images/linkedin.png";
import twitter from "../pages/images/twitter.png";
import Link from "next/link";
import circlescale from "../pages/images/circlescaleAI.png";

const MyCompanies: NextPage = () => {
  return (
    <div className="px-10 py-10 bg-neutral-800 rounded-xl">
      <div className="flex flex-col">
        <div className="text-white text-2xl font-extrabold">My companies:</div>
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
            <Link href="/dashboard">
              <button className="bg-white rounded-full px-3 py-3">
                Source new company
              </button>
            </Link>
          </div>
          <div className="pl-3">
            <button className="bg-white rounded-full px-3 py-3">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCompanies;
