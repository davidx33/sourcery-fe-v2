import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import ProfileHeader from "../components/ProfileHeader";
import MyCompanies from "../components/MyCompanies";
import robinhood from "../pages/images/robinhoodlogo.png";
import roblox from "../pages/images/roblox.jpg";
import anduril from "../pages/images/anduril.jpg";
import Layout from "../components/Layout";
import Head from "next/head";


const Profile: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sourcery</title>
        <meta
          name="description"
          content="Find companies. Make money."
        />
      </Head>
      <div className="py-5">
        <ProfileHeader />
      </div>
      <div className="pb-5">
        <MyCompanies />
      </div>
      <div className="px-10 py-10 bg-neutral-800 rounded-xl">
        <div className="flex flex-col">
          <div className="text-white text-2xl font-extrabold pb-10">
            Recommended companies to review:
          </div>
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
    </Layout>
  );
};

export default Profile;
