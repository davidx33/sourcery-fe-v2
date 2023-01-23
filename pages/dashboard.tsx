import React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sourcery</title>
        <meta name="description" content="Find companies. Make money." />
      </Head>
      <Form />
    </Layout>
  );
};

export default Dashboard;
