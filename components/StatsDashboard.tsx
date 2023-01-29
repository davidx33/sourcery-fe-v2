import React from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import greenarrow from "../pages/images/greenarrow.png";
import redarrow from "../pages/images/redarrow.png";

const StatsDashboard: NextPage = () => {
  const { data: session, status } = useSession();

  let content;

  if (!session) {
    content = <></>;
  }

  if (session) {
    content = (
      <div className="flex flex-row px-3 bg-slate-100 w-full justify-between rounded-lg py-3 items-center">
        <div className="flex flex-col px-5">
          <p className="text-gray-500">Total Viable Sources</p>
          <div className="flex flex-row items-end pt-2">
            <h1 className="text-2xl">200</h1>
            <p className="pl-2 pb-1 text-sm text-green-500">12%</p>
            <p className="pl-1 pb-1 text-sm text-gray-500">in last week</p>
          </div>
        </div>
        <div className="flex flex-col px-5 pl-5">
          <p className="text-gray-500">Total Compensation</p>
          <div className="flex flex-row items-end pt-2">
            <h1 className="text-2xl">1.2K</h1>

            <p className="pl-2 pb-1 text-sm text-green-500">12%</p>
            <p className="pl-1 pb-1 text-sm text-gray-500">vs. last month</p>
          </div>
        </div>
        <div className="flex flex-col px-5 pl-5">
          <p className="text-gray-500">Percentile of Sourcers</p>
          <div className="flex flex-row items-end pt-2">
            <h1 className="text-2xl">3%</h1>
            <p className="pl-2 pb-1 text-sm text-rose-600">8%</p>
            <p className="pl-1 pb-1 text-sm text-gray-500">vs. last month</p>
          </div>
        </div>
        <div className="flex flex-col px-5 pl-5">
          <p className="text-gray-500">Total Companies Reviewed</p>
          <div className="flex flex-row items-end pt-2">
            <h1 className="text-2xl">200</h1>
            <div className="flex flex-row items-center">
              <p className="pl-2 pb-1 text-sm text-green-500">12%</p>
            </div>

            <p className="pl-1 pb-1 text-sm text-gray-500">in the last week</p>
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

export default StatsDashboard;
