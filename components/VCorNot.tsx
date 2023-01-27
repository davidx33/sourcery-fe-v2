import React from "react";
import ImAVC from "./ImAVC";
import ImNotAVC from "./ImNotAVC";
import type { NextPage } from "next";

const VCorNot: NextPage = () => {
  return (
    <div className="flex flex-col bg-white px-20 py-10 scroll-smooth">
      <div className="flex flex-row">
        <div className="pr-3">
          <a href="#imnotVC">
            <button className="text-black border-2 px-1  border-solid md:px-5 md:py-2 rounded-full hover:bg-white hover:border-black ">
              I'm not a VC
            </button>
          </a>
        </div>
        <div className="pl-3">
          <a href="#imVC">
            <button className="text-black border-2 px-1 border-solid md:px-5 md:py-2 rounded-full hover:bg-white hover:border-black ">
              I'm a VC
            </button>
          </a>
        </div>
      </div>
      <div id="imnotVC">
        <ImNotAVC />
      </div>
      <div id="imVC">
        <ImAVC />
      </div>
    </div>
  );
};

export default VCorNot;
