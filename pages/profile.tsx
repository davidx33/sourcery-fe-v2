import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import Head from "next/head";
import prisma from "../lib/prisma";
import { Submission } from "@prisma/client";
import { Message } from "@prisma/client";
import { ReviewThese } from "@prisma/client";
import { getSession } from "next-auth/react";
import ProfileHeader from "../components/ProfileHeader";
import MessageBoard from "../components/MessageBoard";
import MyCompanies from "../components/MyCompanies";
import Layout from "../components/Layout";
import StatsDashboard from "../components/StatsDashboard";
import ReviewCompanies from "../components/ReviewCompanies";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return {
      props: {
        submissions: [],
        messages: [],
        reviewThese: [],
      },
    };
  }

  const submissions = await prisma.submission.findMany({
    where: {
      user: session.user,
    },
    include: {
      company: true,
    },
  });

  const messages = await prisma.message.findMany();
  const reviewThese = await prisma.reviewThese.findMany();

  res.statusCode = 200;
  if (
    submissions !== undefined &&
    messages !== undefined &&
    reviewThese !== undefined
  ) {
    // JSON parse and stringify is needed becase of date object that is being returned
    return {
      props: {
        submissions: JSON.parse(JSON.stringify(submissions)),
        messages: JSON.parse(JSON.stringify(messages)),
        reviewThese: JSON.parse(JSON.stringify(reviewThese)),
      },
    };
  }
  return {
    props: {
      submissions: [],
      messages: [],
      reviewThese: [],
    },
  };
};

type Props = {
  submissions: Submission[];
  messages: Message[];
  reviewThese: ReviewThese[];
};

const Profile: NextPage<Props> = ({ submissions, messages, reviewThese }) => {
  return (
    <Layout>
      <Head>
        <title>Sourcery</title>
        <meta name="description" content="Find companies. Make money." />
      </Head>
      <ProfileHeader />
      <StatsDashboard submit={submissions} />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-3">
            <ReviewCompanies companies={reviewThese} />
          </div>
          <div className="md:w-1/2 pl-3">
            <MessageBoard messages={messages} />
          </div>
        </div>
      </div>
      <div className="pt-3">
        <MyCompanies submissions={submissions} />
      </div>
    </Layout>
  );
};

export default Profile;
