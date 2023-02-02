import React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Head from "next/head";
import VenmoForm from "../components/VenmoForm";
import VenmoFormHeader from "../components/VenmoFormHeader";

const Payments: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sourcery</title>
        <meta name="description" content="Find companies. Make money." />
      </Head>
      <div className="flex flex-col justify-center pt-32">
        <VenmoFormHeader />
        <div className="flex justify-center">
          <VenmoForm />
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
