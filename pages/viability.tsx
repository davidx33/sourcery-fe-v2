import React, { FC } from "react";
import Layout from "../components/Layout";
import Divider from "../components/Divider";

const Viability: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center md:px-36 py-28 bg-white">
        <h1 className="flex justify-left text-5xl md:text-6xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">
          How To Be a Successful Sourcer
        </h1>
        <div className="flex justify-center flex-col pt-10">
          <h1 className="flex justify-left text-3xl text-black rounded-xl pb-8">
            How It Works
          </h1>
          <Divider />
          <p className="justify-center text-gray-500 text-left text-md pt-6">
            Sourcery is a platform that provides{" "}
            <strong>cash and venture capital interviews</strong> to users for{" "}
            <strong>sourcing startups</strong> (finding cool new companies and
            writing what you think about them). To get started, go to the Your
            Deal Flow box and upload the CRM (Airtable or Google Sheets) that
            you currently use for sourcing. If you are new to sourcing, click
            Get started with a template. If there is an integration you want to
            see besides Airtable and Google Sheets, or you have any questions,
            we would love to hear from you. Contact us via the button below.
          </p>
        </div>
        <div className="flex justify-center flex-col pt-10">
          <h1 className="flex justify-left text-3xl text-black rounded-xl pb-8">
            Viability Criteria
          </h1>
          <Divider />
          <h2 className="justify-center text-gray-500 text-left text-md pt-6">
            Make sure the companies you source are viable to be considered for
            investment by our venture partners. Our criteria for "viable" is
            simple:{" "}
            <strong>
              for-profit startups with less than 50 LinkedIn employees.{" "}
            </strong>
          </h2>
        </div>
        <div className="flex justify-center flex-col pt-16">
          <h1 className="flex justify-left text-3xl  text-black rounded-xl pb-8">
            Incentive Structure
          </h1>
          <Divider />
          <h2 className="justify-center text-gray-500 text-left text-md pt-3">
            You will <strong>receive $1,000</strong> if one of our VCs invests
            in a startup you submit. Additionally, the{" "}
            <strong>top 3% of users</strong> are referred to our venture
            partners for interview opportunities.
          </h2>
        </div>
        <div className="pt-10">
          <a href="https://calendly.com/sourceryinfo/15min">
            <button className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Viability;
