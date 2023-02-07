import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VCorNot from "../components/VCorNot";
import Interested from "../components/Interested";
import Footer from "../components/Footer";
import Head from "next/head";

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
