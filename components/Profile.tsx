import React, { useState } from "react";
import type { NextPage } from "next";
import CompaniesSourced from "./ProfileCompaniesSourcedBody";
import Footer from "./Footer"
import ProfilePayoutsBody from "./ProfilePayoutsBody";

const FormHeader: NextPage = () => {
  const [isCompaniesSourced, setIsCompaniesSourced] = useState(true);
  return (
    <div className="pt-8 bg-black px-16 py-10">
      <div className="flex flex-col pb-10">
        <h1 className="text-6xl pb-10 font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-transparent">
          {isCompaniesSourced
            ? "Total companies sourced: 12"
            : "Total money received: $523"}
        </h1>
        <h2 className="text-2xl text-white">
          {isCompaniesSourced
            ? "Companies sourced today: 3"
            : "Total money received today: $33"}
        </h2>
      </div>
      <div className="flex flex-row pb-10">
        <button
          className={
            isCompaniesSourced
              ? "bg-white w-2/4 rounded-2xl py-2"
              : "text-gray-700 w-2/4 rounded-2xl py-2"
          }
          onClick={() => {
            setIsCompaniesSourced(true);
          }}
        >
          Companies sourced
        </button>
        <div className="bg-black w-3"></div>
        <button
          className={
            isCompaniesSourced
              ? "text-gray-700 w-2/4 pr-3 rounded-2xl py-2"
              : "bg-white w-2/4 pr-3 rounded-2xl py-2"
          }
          onClick={() => {
            setIsCompaniesSourced(false);
          }}
        >
          Payouts received
        </button>
      </div>
      {isCompaniesSourced ? <CompaniesSourced/> : <ProfilePayoutsBody/>}
      <Footer/>
    </div>
  );
};

export default FormHeader;
