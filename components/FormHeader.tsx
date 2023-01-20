import React, { useState } from "react";
import type { NextPage } from "next";
import { Listbox } from "@headlessui/react";
import Footer from "./Footer";

const people = [
  { id: 1, name: "Healthcare" },
  { id: 2, name: "Education" },
  { id: 3, name: "Consumer products/food" },
  { id: 4, name: "FinTech" },
  { id: 5, name: "B2B SaaS" },
  { id: 6, name: "Web3" },
  { id: 7, name: "Other" },
];

const FormHeader: NextPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div className="px-16 pt-8 bg-black">
      <div className="flex flex-col">
        <h1 className="text-8xl text-extrabold bg-gradient-to-r from-fuchsia-600  to-blue-500 bg-clip-text text-transparent rounded-xl pb-8">
          Ready to start sourcing?
        </h1>
        <h2 className="text-white text-left w-2/4 text-2xl">
          Enter your companies and any relevant information via the form below.
          Check your profile for a running log of all the companies you've
          sourced.
        </h2>
        <div className="flex justify-center py-10">
          <div className=" bg-white w-full h-1"></div>
        </div>
        <div className="bg-neutral-800 rounded-2xl flex flex-col px-10 py-10">
          <h1 className="text-white text-2xl pb-10">Submit a company:</h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-row pb-10">
              <h2 className="text-white pr-3 p-2">Company name:</h2>
              <form>
                <input
                  placeholder="Enter here..."
                  className="rounded-md px-2 py-2 cursor-pointer"
                />
              </form>
            </div>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <h2 className="text-white pr-3">Industry:</h2>
                  <form>
                    <Listbox.Button className="text-black bg-white rounded-md px-2 py-2">
                      {selectedPerson.name} ↓
                    </Listbox.Button>
                  </form>
                </div>
                <Listbox.Options className="flex flex-col items-end pt-2 cursor-pointer">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      className="text-white"
                    >
                      {person.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
          <div className="flex justify-center">
            <button className="bg-white rounded-2xl px-3 py-3 w-2/4 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default FormHeader;
