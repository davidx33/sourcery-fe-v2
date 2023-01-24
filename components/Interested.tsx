import React from "react";
import type { NextPage } from "next";
import Divider from "./Divider";
import Link from "next/link";

const Interested: NextPage = () => {
  return (
    <div className="pt-52 pb-16">
      <Divider />
      <div className="flex flex-col justify-center py-36">
        <h1 className="flex px-10 text-center md:px-0 justify-center text-white text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
          Want to learn more about Sourcery?
        </h1>
        <div className="flex flex-row justify-center pt-5">
          <div className="pr-3">
            <button className="bg-white text-black rounded-full">
              <h2 className="px-5 py-5">
                <a href="mailto:thexudavid@gmail.com">Contact us</a>
              </h2>
            </button>
          </div>
          <div className="pl-3">
            <button className="bg-white text-black rounded-full">
              <h2 className="px-5 py-5">
                <Link href="/profile">Get started</Link>
              </h2>
            </button>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Interested;
