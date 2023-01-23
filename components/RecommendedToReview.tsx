import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import bookinglayer from "../pages/images/bookinglayer.jpg";
import snippyly from "../pages/images/snippyly.jpg";
import vade from "../pages/images/vade.jpg";

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
                src={snippyly}
                alt=""
                width={90}
                height={90}
                className="rounded-full cursor-pointer"
                onClick={() => {
                  window.open("https://snippyly.com/")
                }}
              />
              <div className="flex flex-col pl-5 items-center">
                <h1 className="text-white text-2xl font-bold pb-3">Snippyly</h1>
                <Link href="/form">
                  <button className="bg-white px-2 py-2 rounded-full">
                    Review now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={bookinglayer}
                alt=""
                width={90}
                height={90}
                className="rounded-full cursor-pointer"
                onClick={() => {
                  window.open("https://www.bookinglayer.com/")
                }}
              />
              <div className="flex flex-col pl-5 items-center">
                <h1 className="text-white text-2xl font-bold pb-3">
                  Booking Layer
                </h1>
                <Link href="/form">
                  <button className="bg-white px-2 py-2 rounded-full">
                    Review now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={vade}
                alt=""
                width={90}
                height={90}
                className="rounded-full cursor-pointer"
                onClick={() => {
                  window.open("https://www.vade.ai/")
                }}
              />
              <div className="flex flex-col pl-5 items-center">
                <h1 className="text-white text-2xl font-bold pb-3">Vade</h1>
                <Link href="/form">
                  <button className="bg-white px-2 py-2 rounded-full">
                    Review now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedToReview;
