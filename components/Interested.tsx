import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import stripe from "./images/stripelogo.png";
import google from "./images/googlelogo.png"

const Interested: NextPage = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex justify-center">
        <div className="text-white bg-neutral-800 rounded-lg">
          <div className="flex flex-row items-center justify-around pt-6 pb-6">
            <div className="flex flex-row">
              <Image src={stripe} alt="" height={200} width={200} className="pr-5" />
              <Image src={google} alt="" height={200} width={200} className="pl-3" />
            </div>
            <div className="flex flex-col w-2/4">
              <div className="text-5xl pb-6 font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-none">
                Interested in sourcing the next big thing?
              </div>
              <div className="text-2xl ">
                Talk to our team today for more details.
              </div>
              <form className="pt-3 flex flex-row">
                <input
                  type="text"
                  placeholder="Enter email here..."
                  className="rounded-lg pl-2 py-1 pr-10"
                />
                <div className="pl-2 pr-3">
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
