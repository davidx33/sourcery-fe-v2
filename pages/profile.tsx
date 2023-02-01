import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import Head from "next/head";
import prisma from "../lib/prisma";
import { Submission } from "@prisma/client";
import { MessageBoard } from "@prisma/client";
import { ReviewThese } from "@prisma/client";
import { getSession } from "next-auth/react";
import ProfileHeader from "../components/ProfileHeader";
import MyCompanies from "../components/MyCompanies";
import Layout from "../components/Layout";
import StatsDashboard from "../components/StatsDashboard";
import ReviewCompanies from "../components/ReviewCompanies";
import MsgBoard from "../components/MessageBoard";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return {
      props: {
        submissions: [],
        messageBoard: [],
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

  const messageBoard = prisma.messageBoard.findMany();
  const reviewThese = prisma.reviewThese.findMany();

  res.statusCode = 200;
  if (submissions !== undefined  ) {
    // JSON parse and stringify is needed becase of date object that is being returned
    return {
      props: {
        submissions: JSON.parse(JSON.stringify(submissions)),
        messageBoard: JSON.parse(JSON.stringify(messageBoard)),
        reviewThese: JSON.parse(JSON.stringify(reviewThese)),
      },
    };
  }
  return {
    props: {
      submissions: [],
      messageBoard: [],
      reviewThese: [],
    },
  };
};

type Props = {
  submissions: Submission[];
  messageBoard: MessageBoard[];
  reviewThese: ReviewThese[];
};

const Profile: NextPage<Props> = ({ submissions, messageBoard }) => {
  return (
    <Layout>
      <Head>
        <title>Sourcery</title>
        <meta name="description" content="Find companies. Make money." />
      </Head>
      <ProfileHeader />
      <StatsDashboard />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-1/2 pr-3">
            <ReviewCompanies reviewThese={reviewThese} />
          </div>
          <div className="w-1/2 pl-3">
            <MsgBoard messageBoard={messageBoard} />
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
