import React from "react";
import { FC } from "react";
import { Submission } from "@prisma/client";

type Props = {
  submissions: Submission[];
};

const StatsDashboard: FC<Props> = ({ submissions }) => {
  return (
    <div className="rounded-xl text-black w-full">
      <div className="flex justify-center pt-3">
        <div className="flex flex-col md:flex-row px-3 bg-gray-50 w-full justify-between rounded-lg py-3 items-center">
          <div className="flex flex-col md:pb-0 pb-5 px-5">
            <p className="text-gray-500">Total Viable Sources</p>
            <div className="flex flex-row justify-center items-end pt-2">
              <h1 className="text-2xl">{submissions.length}</h1>
              <p className="pl-2 pb-1 text-sm text-green-500">0%</p>
              <p className="pl-1 pb-1 text-sm text-gray-500">vs. last week</p>
            </div>
          </div>
          <div className="flex flex-col md:pb-0 pb-5 px-5 pl-5">
            <p className="text-gray-500">Total Compensation</p>
            <div className="flex flex-row justify-center items-end pt-2">
              <h1 className="text-2xl">$0</h1>

              <p className="pl-2 pb-1 text-sm text-green-500">0%</p>
              <p className="pl-1 pb-1 text-sm text-gray-500">vs. last month</p>
            </div>
          </div>
          <div className="flex flex-col md:pb-0 pb-5 px-5 pl-5">
            <p className="text-gray-500">Percentile of Sourcers</p>
            <div className="flex flex-row justify-center items-end pt-2">
              <h1 className="text-2xl">5%</h1>
              <p className="pl-2 pb-1 text-sm text-green-500">0%</p>
              <p className="pl-1 pb-1 text-sm text-gray-500">vs. last month</p>
            </div>
          </div>
          <div className="flex flex-col md:pb-0 pb-5 px-5 pl-5">
            <p className="text-gray-500">Total Companies Reviewed</p>
            <div className="flex flex-row justify-center  items-end pt-2">
              <h1 className="text-2xl">{submissions.length}</h1>
              <div className="flex flex-row items-center">
                <p className="pl-2 pb-1 text-sm text-green-500">0%</p>
              </div>

              <p className="pl-1 pb-1 text-sm text-gray-500">
                vs. last week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
