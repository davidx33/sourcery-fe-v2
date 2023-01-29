import React, { FC } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

const Form: FC = () => {
  return (
    <div className="py-8">
      <FormHeader />
      <FormBody />
    </div>
  );
};

export default Form;
