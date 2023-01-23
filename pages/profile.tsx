import React from "react";
import type { NextPage } from "next";
import ProfileHeader from "../components/ProfileHeader";
import MyCompanies from "../components/MyCompanies";
import Layout from "../components/Layout";
import Head from "next/head";
import RecommendedToReview from "../components/RecommendedToReview";

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
      <div className="pb-5">
        <RecommendedToReview/>
      </div>
      
    </Layout>
  );
};

export default Profile;
