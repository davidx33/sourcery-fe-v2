import React from "react";
import { FC } from "react";
import { Submission } from "@prisma/client";

type Props = {
  submissions: Submission[];
};

const UserStatistics: FC<Props> = ({ submissions }) => {
  return (
    <div className="rounded-xl bg-white py-3 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
        </div>
        <div>
          <p className="text-sm text-gray-500">Viable Sources</p>
          <h1 className="text-xl relative">
            {0}
            <p className="absolute left-4 bottom-0 ml-5 text-sm text-green-700 font-semibold">+0%</p>
          </h1>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Compensation</p>
          <h1 className="text-xl relative">
            $0
            <p className="absolute left-4 bottom-0 ml-5 text-sm text-green-700 font-semibold">+0%</p>
          </h1>
        </div>
        <div>
          <p className="text-sm text-gray-500">Percentile Among Sourcers</p>
          <h1 className="text-2xl relative">
            5%
            <p className="absolute left-4 bottom-0 ml-5 text-sm text-green-700 font-semibold">+0%</p>
          </h1>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Sourced</p>
          <h1 className="text-2xl relative">
            {submissions.length}
            <p className="absolute left-4 bottom-0 ml-5 text-sm text-green-700 font-semibold">+0%</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
