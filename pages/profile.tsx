import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import Head from "next/head";
import prisma from "../lib/prisma";
import { Submission } from "@prisma/client";
import { getSession } from "next-auth/react";
import ProfileHeader from "../components/ProfileHeader";
import MyCompanies from "../components/MyCompanies";
import Layout from "../components/Layout";
import RecommendedToReview from "../components/RecommendedToReview";

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
        <MyCompanies submissions={submissions} />
      </div>
      <div className="pb-5">
        <RecommendedToReview />
      </div>

    </Layout>
  );
};

export default Profile;
