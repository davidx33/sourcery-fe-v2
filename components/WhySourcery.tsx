import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import man1 from "../pages/images/Guy 1.png";
import man2 from "../pages/images/Guy 2.png";
import man3 from "../pages/images/Guy 3.png";
import man4 from "../pages/images/Guy 4.png";
import woman1 from "../pages/images/woman1.png";
import woman2 from "../pages/images/woman2.png";
import woman3 from "../pages/images/woman3.png";
import woman4 from "../pages/images/woman4.png";
import woman5 from "../pages/images/woman5.png";
import monetize from "../pages/images/monetize.png";

const WhySourcery: NextPage = () => {
  return (
    <div className="flex flex-col px-10 py-10">
      <h2 className="flex text-black justify-center text-6xl md:text-8xl  text-center ">
        Why Sourcery?
      </h2>
      <div className="flex flex-col md:flex-row  md:text-left text-5xl pt-16 md:px-10 justify-center items-center">
        <div className="flex flex-col  pr-5 md:w-1/3">
          <h2 className="pt-5 text-5xl text-black">
            Monetize your domain expertise
          </h2>
          <h3 className="text-xl text-black pt-5">
            Chances are you spend lots of time reading about new companies,
            ideas, and founders in the industry you care about. Keep track of
            that info on our platform, and get paid for it.
          </h3>
        </div>
        <div className="rounded-xl">
        <div className="px-16 py-16">
            <Image src={monetize} alt="" width={300} height={300} />
          </div>
         
        </div>
      </div>
      <div className="flex flex-col md:flex-row  md:text-left text-5xl pt-8 md:px-10 justify-evenly items-center">
        <div className="rounded-xl">
        <div className="px-16 py-16">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <Image src={man1} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
                <Image src={man2} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
                <Image src={woman1} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
              </div>
              <div className="flex flex-row">
                <Image src={man3} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
                <Image src={woman2} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
                <Image src={woman3} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
              </div>
              <div className="flex flex-row">
                <Image src={woman4} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
                <Image src={man4} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
                <Image src={woman5} alt="" width={90} height={90} className="rounded-full shadow-2xl shadow-fuchsia-900 animate-bounce" />
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col pr-5 md:w-1/3">
          <h2 className="pt-5 text-5xl text-black">
            Access the Sourcery network
          </h2>
          <h3 className="text-xl pt-5 text-black">
            Looking for jobs in entrepreneurship or venture capital? Need a
            better way to track up and coming players in your industry? Top
            sorcerers 🧙 will be connected to our venture partners for interview
            and networking opportunities.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhySourcery;
