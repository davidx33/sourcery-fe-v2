import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import stripe from "../pages/images/stripelogo.png";
import google from "../pages/images/googlelogo.png"

const Interested: NextPage = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex justify-center">
        <div className="text-white bg-neutral-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-around pt-6 pb-6">
            <div className="flex md:flex-row flex-col">
              <Image src={stripe} alt="" height={200} width={200} className="pr-5" />
              <Image src={google} alt="" height={200} width={200} className="pl-3 py-5" />
            </div>
            <div className="flex flex-col w-2/4">
              <div className="md:text-5xl text-4xl pb-6 font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-none">
                Want to learn more about Sourcery?
              </div>
              <div className="text-2xl ">
                Talk to our team today for more details.
              </div>
              <form className="pt-3 flex md:flex-row flex-col">
                <input
                  type="text"
                  placeholder="Enter email here..."
                  className="rounded-lg pl-2 py-1 pr-10"
                />
                <div className="pl-2 pt-5 md:pt-0 pr-3">
                  <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-none text-lg rounded-xl px-2 py-1">
                    Submit ➞
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
