import React, { FC } from "react";
import Layout from "../components/Layout";
import Divider from "../components/Divider";

const Templates: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center md:px-36 py-28 bg-white">
        <h1 className="flex justify-left text-5xl md:text-6xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">
          Get Started With a Template
        </h1>
        <div className="flex justify-center flex-col pt-10">
          <h1 className="flex justify-left text-3xl text-black rounded-xl pb-8">
            Airtable Template
          </h1>
          <Divider />
          <h2 className="flex justify-center text-gray-500 text-left text-md py-6">
          Reference below for an example Airtable that can be used to source startup companies. Feel free to open the Airtable in a new tab, make a copy, and import it into Sourcery.  
          </h2>
          <iframe
            className="h-96"
            src={`https://airtable.com/embed/shribHw44Gc54IAAN?backgroundColor=blue&viewControls=on`}
            width="100%"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
          <div className="pt-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://airtable.com/embed/shribHw44Gc54IAAN?backgroundColor=blue&viewControls=on`}
              className="px-5 py-2.5 mr-2 mb-2 border rounded-lg flex font-medium text-sm justify-center"
            >
              Open in new tab
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 text-gray-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                <path d="M10 14l10 -10"></path>
                <path d="M15 4l5 0l0 5"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col pt-16">
          <h1 className="flex justify-left text-3xl  text-black rounded-xl pb-8">
            Google Sheets Template
          </h1>
          <Divider />
          <h2 className="flex justify-center text-gray-500 text-left text-md py-6">
          Reference below for an example Google Sheet that can be used to source startup companies. Feel free to open the Google Sheet in a new tab, make a copy, and import it into Sourcery. 
          </h2>
          <iframe
            className="h-96"
            src={
              "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZDj48nHda1A59Za6VApwgSvBSEeg8gZpjrCJ6UUH4hu-TJBz6RI0PHKKKqb9WlM-gDZScp_9eAsel/pubhtml"
            }
            width="100%"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
        </div>
        <div className="pt-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://docs.google.com/spreadsheets/d/1g7Q1DnWiWee2BbD3S3FDMKUlXiHlyjiCS5dAV0jo-wQ/edit?usp=sharing"
            }
            className="px-5 py-2.5 mr-2 mb-2 border rounded-lg flex font-medium text-sm justify-center"
          >
            Open in new tab
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 text-gray-600"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
              <path d="M10 14l10 -10"></path>
              <path d="M15 4l5 0l0 5"></path>
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Templates;
