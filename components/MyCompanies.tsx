import { FC } from "react";
import Link from "next/link";
import { Submission } from "@prisma/client";

type Props = {
  submissions: Submission[];
};

const MyCompanies: FC<Props> = ({ submissions }) => {
  return (
    <div className="px-10 py-5 bg-neutral-900 rounded-xl mb-5">
      <div className="flex flex-col md:flex-row mb-5 pb-3 med:pb-0">
        <h1 className="text-white text-2xl font-semibold">My Companies</h1>

        <Link
          href="/dashboard"
          className="bg-white shadow-lg text-neutral-900 rounded-full px-10 py-2 font-semibold ml-auto text-sm md:text-lg"
        >
          Source New Company
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-neutral-50 dark:bg-neutral-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company Sector
              </th>
              <th scope="col" className="px-6 py-3">
                Date Submitted
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-neutral-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* @ts-ignore */}
                    {submission.company.name}
                  </th>
                  <td className="px-6 py-4">
                    {/* @ts-ignore */}
                    {submission.company.sector}
                  </td>
                  <td className="px-6 py-4">
                    {/* @ts-ignore */}
                    {submission.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-white dark:text-white hover:underline"
                    >
                      Coming Soon
                    </a>
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
