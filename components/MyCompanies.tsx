import { FC } from "react";
import Link from "next/link";
import { Submission } from "@prisma/client";
import Divider from "../components/Divider";

type Props = {
  submissions: Submission[];
};

const MyCompanies: FC<Props> = ({ submissions }) => {
  return (
    <div className="px-10 py-5 bg-slate-100 rounded-xl mb-5 ">
      <div className="flex flex-col md:flex-row md:justify-between mb-5 med:pb-0">
        <h1 className="text-black text-2xl font-semibold">My Companies</h1>
        <div className="flex flex-row items-center">
          <Link
            href="/dashboard"
            className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
          >
            Source New Company
          </Link>
        </div>
      </div>
      <Divider />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-3">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black uppercase bg-white">
            <tr>
              <th scope="col" className="px-3 py-3">
                Company Name
              </th>
              <th scope="col" className="px-3 py-3">
                Industry
              </th>
          
              <th scope="col" className="px-3 py-3">
                Team
              </th>
              <th scope="col" className="px-3 py-3">
                Proprietary
              </th>
              <th scope="col" className="px-3 py-3">
                Mission Critical
              </th>
              <th scope="col" className="px-3 py-3">
                Company Sector
              </th>
              <th scope="col" className="px-3 py-3">
                POC
              </th>
              <th scope="col" className="px-3 py-3">
                Viable
              </th>
              <th scope="col" className="px-3 py-3">
                Invested
              </th>
              
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => {
              return (
                <tr
                  className="bg-white dark:bg-slate-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {/* @ts-ignore */}
                    {submission.company.name}
                  </th>
                  <td className="px-4 py-4">
                    {/* @ts-ignore */}
                    {submission.company.sector}
                  </td>
                  <td className="px-4 py-4">
                    {/* @ts-ignore */}
                    {submission.company.foundingTeamQualification}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCompanies;
