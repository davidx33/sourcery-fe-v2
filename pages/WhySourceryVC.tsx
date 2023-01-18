import React from "react";
import Image from 'next/image';
import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="px-10 py-10">
        <div className="bg-gradient-to-r from-violet-700 to-blue-300 w-2/4">
            This should be purple
        </div>
      
    </div>
  );
};

export default Hero;