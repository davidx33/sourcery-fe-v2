import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Interested: NextPage = () => {
  return (
    <div className="py-10 bg-slate-100">
      <div className="flex flex-col justify-center py-10">
        <h1 className="flex px-10 text-center md:px-0 justify-center text-black text-3xl ">
          Want to learn more about Sourcery?
        </h1>
        <div className="flex flex-row items-center justify-center pt-5">
          <div className="pr-3">
            <button className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black">
              <h2>
                <a href="mailto:sourceryinfo@gmail.com">Contact us</a>
              </h2>
            </button>
          </div>
          <div className="pl-3">
            <button className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black">
              <h2 className="">
                <Link href="/profile">Get started</Link>
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
