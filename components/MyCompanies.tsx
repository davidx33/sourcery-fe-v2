import React, { useState } from "react";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import linkedin from "../pages/images/linkedin.png";
import { Submission } from "@prisma/client";
import email from "../pages/images/mail.png";
import square from "../pages/images/window_square.png";
import expand from "../pages/images/expand.png";

type Props = {
  submissions: Submission[];
};

const MyCompanies: FC<Props> = ({ submissions }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="px-10 py-5 bg-slate-100 rounded-xl mb-5">
      <div className="flex flex-col md:flex-row md:justify-between mb-5 med:pb-0">
        <div className="flex flex-row items-center">
          <h1 className="text-black text-2xl text-center md:text-left">
            My Companies
          </h1>
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
              className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
            >
              View Viability Criteria
            </Link>
          </div>

          <div className="flex flex-row md:justify-left justify-center items-center md:pt-0 pt-5">
            <Link
              href="/dashboard"
              className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
            >
              Source New Company
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black uppercase bg-white">
            <tr>
              <th scope="col" className="px-3 py-3">
                Company Name
              </th>
              <th scope="col" className="px-3 py-3">
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
              console.log(submission.additionalNotes)
              return (
                <tr
                  className=" bg-white dark:bg-slate-100 dark:border-gray-700"
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
                    <div className="rounded-full bg-green-200  px-2 py-2">
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
