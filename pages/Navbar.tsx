import React from "react";
import type { NextPage } from "next";
import Image from 'next/image';
import image from "./images/smoke.png"

const Navbar: NextPage = () => {
  return (
    <div className="bg-black flex flex-row items-center py-3 justify-between px-10">
      <div className="flex flex-row">
        <div className="text-white text-2xl text-extrabold font-sans font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-none">
          Sourcery
        </div>
        <Image src={image} alt="" className="w-8 h-8 pl-2"/>
      </div>
      <div className="flex flex-row">
        <h2 className="text-white cursor-pointer pr-5">About</h2>
        <h2 className="text-white cursor-pointer pl-5">
          <a href="mailto:thexudavid@gmail.com">Product</a>
        </h2>
      </div>
      <div className="flex flex-row items-center justify-end pr-5">
        <button className="text-black bg-white px-5 py-3 rounded-md pr-5">
          Sign up
        </button>
        <h2 className="text-white pl-5">Log in</h2>
      </div>
    </div>
  );
};

export default Navbar;
