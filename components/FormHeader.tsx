import React, { FC } from "react";

const FormHeader: FC = () => {
  return (
    <div>
      <h1 className="text-8xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">Ready to start sourcing?</h1>
      <h2 className="text-gray-300 text-left text-2xl">Enter your companies and any relevant information via the form below. Check your profile to see all the companies you've sourced.</h2>
    </div>
  );
};

export default FormHeader;
