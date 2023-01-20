import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import FormHeader from "../components/FormHeader";

// implementation:
// have each button click change state. based on what state is toggled to, display some various imported components

const Form: NextPage = () => {
  return (
    <div >
       <Navbar/>
      <FormHeader />
    </div>
  );
};

export default Form;
