import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Hero: NextPage = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-row py-10 cursor-pointer">
        <Link href="/dashboard">
          <div className="text-black pl-9 cursor-pointer">Product</div>
        </Link>
        <div className="pl-9 cursor-pointer text-black">
          <a href="mailto:sourceryinfo@gmail.com">Contact</a>
        </div>
      </div>
      <div className="text-black pl-9 pb-5">Sourcery © 2022</div>
    </div>
  );
};

export default Hero;
