import React from "react";
import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div>
      <div className="flex flex-row py-10">
        <div className="text-white pl-9 cursor-pointer">Product</div>
        <div className="text-white pl-9 cursor-pointer">
          <a href="mailto:thexudavid@gmail.com">Contact</a>
        </div>
      </div>
      <div className="text-white pl-9 pb-5">Sourcery © 2022</div>
    </div>
  );
};

export default Hero;
