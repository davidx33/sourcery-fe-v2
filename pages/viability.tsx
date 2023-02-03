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
            Viability Criteria
          </h1>
          <Divider />
          <h2 className="flex justify-center text-gray-500 text-left text-md pt-6">
            Make sure your entries are viable to be considered for investment by
            our venture partners. This means for-profit startups with less than
            50 LinkedIn employees and that every category on the submission form
            is correctly completed.
          </h2>
        </div>
        <div className="flex justify-center flex-col pt-16">
          <h1 className="flex justify-left text-3xl  text-black rounded-xl pb-8">
            Incentive Structure
          </h1>
          <Divider />
          <h2 className="flex justify-center text-gray-500 text-left text-md pt-3">
            The incentive structure for viable entries includes $1,000 if one of
            our venture partners invests in your submission. Additionally, the
            top 3% of users are referred to our venture partners for interview
            opportunities.
          </h2>
        </div>
        <div className="pt-10">
          <a href="https://calendly.com/sourceryinfo/15min">
            <button className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Viability;
