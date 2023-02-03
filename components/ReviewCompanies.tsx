import { FC } from "react";
import { ReviewThese } from "@prisma/client";
import Link from "next/link";

type Props = {
  companies: ReviewThese[];
};

const ReviewCompanies: FC<Props> = ({ companies }) => {
  return (
    <div className="rounded-xl text-black w-full h-full bg-white py-3 px-6">
      <h2 className="text-xl font-semibold mb-5">Recommended</h2>
      <div className="grid grid-cols-3 gap-5 pt-2">
        {companies?.map((company, index) => {
          return (
            <>
              <div key={`name-${index}`}>
                <a href={company.url}>
                  <h5 className="hover:underline cursor-pointer font-semibold text-gray-700">{company.companyName}</h5>
                </a>
              </div >
              <div key={`industry-${index}`}>{company.industry}</div>
              <div key={`url-${index}`} className="flex ml-auto pr-10">
                <Link href="/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                    <path d="M10 14l10 -10"></path>
                    <path d="M15 4l5 0l0 5"></path>
                  </svg>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCompanies;
