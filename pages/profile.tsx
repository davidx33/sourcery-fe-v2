import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import prisma from "../lib/prisma";
import Image from "next/image";
import ProfileHeader from "../components/ProfileHeader";
import MyCompanies from "../components/MyCompanies";
import robinhood from "../pages/images/robinhoodlogo.png";
import roblox from "../pages/images/roblox.jpg";
import anduril from "../pages/images/anduril.jpg";
import Layout from "../components/Layout";
import { Submission } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return {
      props: {
        submissions: []
      }
    };
  }

  const submissions = await prisma.submission.findMany({
    where: {
      userId: session.user?.id
    }
  });
  res.statusCode = 200;
  if (submissions !== undefined) {
    // JSON parse and stringify is needed becase of date object that is being returned
    return {
      props: {
        submissions: JSON.parse(JSON.stringify(submissions))
      }
    };
  }
  return {
    props: {
      submissions: []
    }
  };
}

type Props = {
  submissions: Submission[];
}

const Profile: NextPage<Props> = ({ submissions }) => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="md:w-1/2">
          <ProfileHeader />
          <MyCompanies submissions={submissions} />
          <div className="px-10 pt-5 pb-10 bg-neutral-900 rounded-xl">
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-semibold pb-10">Recommended Companies</h1>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-row">
                  <Image
                    src={roblox}
                    alt=""
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <div className="flex flex-col pl-5 items-center">
                    <h1 className="text-white text-2xl font-bold pb-3">Roblox</h1>
                    <button className="bg-white px-2 py-2 rounded-full">
                      Review now
                    </button>
                  </div>
                </div>
                <div className="flex flex-row">
                  <Image
                    src={robinhood}
                    alt=""
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <div className="flex flex-col pl-5 items-center">
                    <h1 className="text-white text-2xl font-bold pb-3">
                      Robinhood
                    </h1>
                    <button className="bg-white px-2 py-2 rounded-full">
                      Review now
                    </button>
                  </div>
                </div>
                <div className="flex flex-row">
                  <Image
                    src={anduril}
                    alt=""
                    width={90}
                    height={90}
                    className="rounded-full"
                  />
                  <div className="flex flex-col pl-5 items-center">
                    <h1 className="text-white text-2xl font-bold pb-3">Anduril</h1>
                    <button className="bg-white px-2 py-2 rounded-full">
                      Review now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
