import React, { FC } from "react";

const FormHeader: FC = () => {
  return (
    <div className="flex flex-col justify-center md:px-36">
      <h1 className="text-7xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">Ready to start sourcing?</h1>
      <h2 className="text-gray-500 text-left text-md">Enter your companies and any relevant information via the form below. Check your profile to see all the companies you've sourced.</h2>
    </div>
  );
};

export default FormHeader;
