import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import Head from "next/head";
import prisma from "../lib/prisma";
import { Message, ReviewThese, Submission } from "@prisma/client";
import { getSession, useSession } from "next-auth/react";
import ProfileHeader from "../components/ProfileHeader";
import MessageBoard from "../components/MessageBoard";
import MyCompanies from "../components/MyCompanies";
import Layout from "../components/Layout";
import ReviewCompanies from "../components/ReviewCompanies";
import UserStatistics from "../components/UserStatistics";

type Props = {
  submissions: Submission[];
  messages: Message[];
  reviewThese: ReviewThese[];
};

const Profile: NextPage<Props> = ({ submissions, messages, reviewThese }) => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <Layout>
        <h1 className="text-center font-semibold text-3xl">
          Loading Profile...
        </h1>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Find companies. Make money." />
      </Head>
      <h1 className="text-xl md:text-4xl my-5">
        Welcome back, <strong>{session.user?.name}.</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3">
          <UserStatistics submissions={submissions} />
        </div>
        <div className="md:col-span-1">
          <ProfileHeader />
        </div>
        <div className="md:col-span-1">
          <ReviewCompanies companies={reviewThese} />
        </div>
        <div className="md:col-span-1">
          <MessageBoard messages={messages} />
        </div>
        <div className="md:col-span-3">
          <MyCompanies submissions={submissions} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

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
