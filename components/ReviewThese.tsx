import React from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import bluechevronright from "../pages/images/bluechevronright.png";

const ReviewThese: NextPage = () => {
  const { data: session, status } = useSession();

  let content;

  if (!session) {
    content = <></>;
  }

  if (session) {
    content = (
      <div className="flex flex-col px-3 bg-slate-100 rounded-lg w-full">
        <div className="flex flex-row justify-between items-center py-3 px-3">
          <h2 className="text-2xl">Review these</h2>
          <div className="flex flex-row items-center pl-16">
            <p className="text-sm text-sky-600">See more</p>
            <div className="pl-1">
              <Image src={bluechevronright} alt="" height={1} width={20} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl text-black w-full">
      <div className="flex justify-center pt-3 med:pt-0">{content}</div>
    </div>
  );
};

export default ReviewThese;