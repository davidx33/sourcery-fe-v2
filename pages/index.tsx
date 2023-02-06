import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VCorNot from "../components/VCorNot";
import Interested from "../components/Interested";
import Footer from "../components/Footer";
import Head from "next/head";
import * as React from "react";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      }
    };
  }
  return {
    props: {},
  }
}

// David TODO: wrap everything component in layout.tsx
const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Sourcery</title>
        <meta name="description" content="Find companies. Make money." />
      </Head>

      <Navbar />
      <Hero />
      <VCorNot />
      <Interested />
      <Footer />
    </div>
  );
};

export default Home;
