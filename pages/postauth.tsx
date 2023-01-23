import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";


const PostAuth: NextPage = () => {
  return (
    <Layout>
      <div>
        Hello. Welcome to the screen you see after you complete Google Auth
      </div>
    </Layout>
  );
};

export default PostAuth;