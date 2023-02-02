import React, { FC } from "react";

const VenmoFormHeader: FC = () => {
  return (
    <div className="flex flex-col justify-center md:px-36">
      <div className="flex justify-center flex-col">
        <h1 className="flex justify-center text-5xl md:text-7xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">
          Enter your Payment Information
        </h1>
        <h2 className="flex justify-center text-gray-500 text-left text-md">
          Submit your Venmo username and your best email to be reached at below. You will be notified when one of your companies is invested in by one of our venture partners.
        </h2>
      </div>
    </div>
  );
};

export default VenmoFormHeader;