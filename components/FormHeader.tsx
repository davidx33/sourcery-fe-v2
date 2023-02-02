import React, { FC } from "react";

const FormHeader: FC = () => {
  return (
    <div className="flex flex-col justify-center md:px-36">
      <div className="flex justify-center flex-col">
        <h1 className="flex justify-center text-7xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">
          Ready to start sourcing?
        </h1>
        <h2 className="flex justify-center text-gray-500 text-left text-md">
          Enter your company and any relevant information via the form below.
        </h2>
      </div>
    </div>
  );
};

export default FormHeader;
