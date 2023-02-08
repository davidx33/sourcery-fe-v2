import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";

import prisma from "../lib/prisma";
import { Message, RecommendedCompany } from "@prisma/client";

import Layout from "../components/Layout";
import ProfilePhoto from "../components/ProfilePhoto";
import RecommendedCompanyCard from "../components/RecommendedCompanyCard";
import StableEmbed from "../components/StableEmbed";

import Info from "../components/svgs/info";

type Props = {
  recommendedCompanies: RecommendedCompany[];
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return {
      props: {
        recommendedCompanies: [],
      },
    };
  }

  const recommendedCompanies = await prisma.recommendedCompany.findMany();

  res.statusCode = 200;
  if (recommendedCompanies !== undefined) {
    return {
      props: {
        recommendedCompanies: JSON.parse(JSON.stringify(recommendedCompanies)),
      },
    };
  }
  return {
    props: {
      recommendedCompanies: [],
    },
  };
};

const Profile: NextPage<Props> = ({ recommendedCompanies }) => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Layout>
        <h1 className="text-center text-2xl md:text-4xl md:pt-10 text-slate-700">
          Loading...
        </h1>
      </Layout>
    );
  }
  return (
    <Layout>
      <h1 className="text-2xl md:text-4xl md:pt-10 text-slate-700 mb-3 md:mb-8">
        Welcome, <strong>{session?.user?.name?.split(" ")[0]}.</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
        {/* left side: deal flow + recommended */}
        <div className="col-span-3">
          <div className="md:h-2/3 bg-slate-50 border border-slate-300 rounded-lg p-3 mb-4 md:mr-4">
            <StableEmbed />
          </div>
          <div className="md:h-1/3 bg-slate-50 border border-slate-300 rounded-lg p-3 mb-4 md:mr-4">
            <h2 className="md:text-xl text-slate-700 font-semibold mb-3">
              Recommended
            </h2>
            <div className="flex py-5 px-10 h-4/5 items-center">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                {recommendedCompanies?.map((company: RecommendedCompany) => {
                  return (
                    <div className="col">
                      <RecommendedCompanyCard
                        name={company.name}
                        industry={company.industry}
                        url={company.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* right side: rewards + profile */}
        <div className="col-span-1">
          {/* rewards */}
          <div className="md:h-1/2 bg-slate-50 border border-slate-300 rounded-lg p-3 mb-4">
            <div className="flex">
              <h2 className="mr-auto md:text-xl text-slate-700 font-semibold mb-3">
                Your Rewards
              </h2>
              <span className="relative group">
                <Info />
                <div className="hidden group-hover:block">
                  <p className="bg-slate-100 absolute text-slate-500 right-0 w-[300px] p-3 rounded-xl">
                    These rewards are provided by our VC partners, including{" "}
                    <strong>Airtree VC, </strong>
                    <strong>Insignia Venture Partners, </strong>and other global
                    firms with over $5B in AUM
                  </p>
                </div>
              </span>
            </div>
            <div>
              {/* interview invites */}
              <div className="bg-blue-100 rounded-lg mb-3">
                <div className="flex">
                  <h2 className="p-3 text-slate-700 font-semibold mr-auto">
                    Interview Invites
                  </h2>
                  <h2 className="p-3 text-slate-700 font-semibold">0</h2>
                </div>
              </div>

              {/* amount paid */}
              <div className="bg-green-100 rounded-lg mb-3">
                <div className="flex">
                  <h2 className="p-3 text-slate-700 font-semibold mr-auto">
                    Amount Paid
                  </h2>
                  <h2 className="p-3 text-slate-700 font-semibold">$0</h2>
                </div>
              </div>

              {/* total viable sourced */}
              <div className="bg-orange-100 rounded-lg mb-3">
                <div className="flex">
                  <h2 className="p-3 text-slate-700 font-semibold mr-auto">
                    Viable Sourced
                  </h2>
                  <h2 className="p-3 text-slate-700 font-semibold">0</h2>
                </div>
              </div>
              <Link
                href="/viability"
                className="p-3 flex  bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl"
              >
                See Sourcing Guidelines
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 text-slate-800"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                  <path d="M3 6l0 13"></path>
                  <path d="M12 6l0 13"></path>
                  <path d="M21 6l0 13"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* profile */}
          <div className="md:h-1/2 bg-slate-50 border border-slate-300 rounded-lg p-3 py-10">
            <div className="mb-3">
              <ProfilePhoto
                radius={40}
                src={session?.user?.image}
                name={session?.user?.name}
              />
            </div>
            <h2 className="text-slate-700 font-semibold mb-1 text-center">
              {session?.user?.name}
            </h2>
            <h2 className="text-slate-400 font-semibold mb-3 text-center text-sm">
              {session?.user?.email}
            </h2>
            <div className="flex justify-center">
              <Link
                href="/payments"
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-xl"
              >
                Edit Payment Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
