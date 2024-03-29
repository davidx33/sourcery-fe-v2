import React, { useState } from "react";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import linkedin from "../pages/images/linkedin.png";
import { Submission } from "@prisma/client";
import email from "../pages/images/mail.png";
import square from "../pages/images/window_square.png";

type Props = {
  submissions: Submission[];
};

const MyCompanies: FC<Props> = ({ submissions }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="px-10 py-5 bg-white rounded-xl mb-5 h-full">
      <div className="flex flex-col md:flex-row md:justify-between mb-5 med:pb-0">
        <div className="flex flex-row items-center">
          <h1 className="text-xl font-semibold">My Companies</h1>
          <div className="px-3 cursor-pointer py-3">
            <Image
              src={square}
              alt=""
              width={20}
              height={20}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex md:flex-row md:justify-left justify-center items-center md:pt-0 pr-3 pt-5">
            <Link
              href="/viability"
              className="px-5 py-2.5 mr-2 mb-2 border rounded-lg flex font-medium text-sm justify-center"
            >
              View Viability Criteria
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 ml-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 8l.01 0"></path>
                <path d="M11 12l1 0l0 4l1 0"></path>
              </svg>
            </Link>
          </div>

          <div className="flex flex-row md:justify-left justify-center items-center md:pt-0 pt-5">
            <Link
              href="/dashboard"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Source New Company
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 text-xs uppercase bg-slate-200">
            <tr>
              <th scope="col" className="px-3 py-3">
                Company Name
              </th>
              <th scope="col" className=" px-3 py-3">
                Industry
              </th>

              {!collapsed && (
                <th scope="col" className="px-3 py-3">
                  Team
                </th>
              )}
              {!collapsed && (
                <th scope="col" className="px-3 py-3">
                  Proprietary
                </th>
              )}
              {!collapsed && (
                <th scope="col" className="px-3 py-3">
                  Mission Critical
                </th>
              )}

              {collapsed && (
                <th scope="col" className="px-3 py-3">
                  Thesis
                </th>
              )}
              {collapsed && (
                <th scope="col" className="px-3 py-3">
                  Notes
                </th>
              )}
              {!collapsed && (
                <th scope="col" className=" flex flex-row items-end px-3 py-3">
                  POC
                </th>
              )}
              {!collapsed && (
                <th scope="col" className="px-3 py-3">
                  Viable
                </th>
              )}
              {!collapsed && (
                <th scope="col" className="px-3 py-3">
                  Invested
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => {
              return (
                <tr
                  className=" bg-slate-50"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {/* @ts-ignore */}
                    {submission.company.name}
                  </th>
                  <td className="flex  py-4">
                    <div className="rounded-full bg-green-200  px-5 py-2 text-green-800 text-xs font-semibold">
                      {/* @ts-ignore */}
                      {submission.company.sector}
                    </div>
                  </td>

                  {!collapsed && (
                    <td className="px-4 py-4">
                      {/* @ts-ignore */}
                      {submission.foundingTeamQualification}
                    </td>
                  )}

                  {!collapsed && (
                    <td className="px-4 py-4">
                      {/* @ts-ignore */}
                      {submission.proprietary}
                    </td>
                  )}
                  {!collapsed && (
                    <td className="px-4 py-4">
                      {/* @ts-ignore */}
                      {submission.missionCritical}
                    </td>
                  )}
                  {collapsed && (
                    <td className="px-4 py-4 cursor-pointer">
                      {/* @ts-ignore */}
                      <div>{submission.relevantExperience}</div>
                    </td>
                  )}

                  {collapsed && (
                    <td className="cursor-pointer px-4 py-4">
                      {/* @ts-ignore */}
                      <div>{submission.additionalNotes}</div>
                    </td>
                  )}

                  {!collapsed && (
                    <td className="px-4 py-4">
                      {/* @ts-ignore */}
                      <div className="flex flex-row cursor-pointer">
                        <a href={submission.pocLinkedin}>
                          <Image src={linkedin} alt="" width={30} height={30} />
                        </a>
                        <a
                          href={"mailto:" + submission.pocEmail}
                          className="pl-3"
                        >
                          <Image src={email} alt="" width={30} height={30} />
                        </a>
                      </div>
                    </td>
                  )}

                  {/* placeholder to fill in columns */}
                  {!collapsed && (
                    <td>
                    </td>
                  )}
                  {!collapsed && (
                    <td>
                    </td>
                  )}

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
