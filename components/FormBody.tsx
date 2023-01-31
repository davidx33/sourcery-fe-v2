import React, { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import FormHorizontalRadio from "./FormHorizontalRadio";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";

const companySectors = [
  "Healthcare",
  "Education",
  "Consumer",
  "FinTech",
  "B2B SaaS",
  "Web3",
  "Other",
];

const relevantExperiences = [
  "Internship (1-2 years)",
  "Research (1-2 years)",
  "Research (3+ years)",
  "Employment (1-2 years)",
  "Employment (3+ years)",
  "Leisure",
];

const foundingTeamQualificationOptions = [
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
];

const proprietaryOptions = [
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
];

const missionCriticalOptions = [
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
];

const FormBody: FC = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState<string>("");
  const [companySector, setCompanySector] = useState<string>("");
  const [companyURL, setCompanyURL] = useState<string>("");
  const [foundingTeamQualification, setFoundingTeamQualification] =
    useState<string>("");
  const [proprietary, setProprietary] = useState<string>("");
  const [missionCritical, setMissionCritical] = useState<string>("");
  const [relevantExperience, setRelevantExperience] = useState<string>("");
  const [additionalNotes, setAdditionalNotes] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/company", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: companyName,
        companySector: companySector,
        companyURL: companyURL,
        foundingTeamQualification: foundingTeamQualification,
        proprietary: proprietary,
        missionCritical: missionCritical,
        relevantExperience: relevantExperience,
        additionalNotes: additionalNotes
      }),
    });
    router.refresh();
  };
  return (
    <div className="flex justify-center">
      <div className="block ">
        <form className="pt-10 mb-5">
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <FormInput
                label="Company Name"
                setState={setCompanyName}
                inputName="company_name"
                state={companyName}
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <FormInput
                label="Linkedin URL"
                setState={setCompanyURL}
                inputName="company_url"
                state={companyURL}
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <FormSelect
              label="Company Industry"
              setState={setCompanySector}
              selectName="company_sector"
              state={companySector}
              options={companySectors}
            />
          </div>
          <div>
            <FormSelect
              label="Your Experience in the Company's Industry"
              setState={setRelevantExperience}
              selectName="relevant_experience"
              state={relevantExperience}
              options={relevantExperiences}
            />
          </div>
          <div className="mt-3">
            <FormHorizontalRadio
              label="How qualified is the founding team considering industry specific constraints? (1 = Not at all, 5 = Extremely Qualified)"
              options={foundingTeamQualificationOptions}
              setState={setFoundingTeamQualification}
            />
          </div>
          <div className="mt-3">
            <FormHorizontalRadio
              label="How proprietary is the technology, structure, or product of the company? (1 = Not at all, 5 = Extremely Proprietary)"
              options={proprietaryOptions}
              setState={setProprietary}
            />
          </div>
          <div className="mt-3">
            <FormHorizontalRadio
              label="How mission critical do you see this company being to its end user? (1 = Not at all, 5 = Extremely Critical)"
              options={missionCriticalOptions}
              setState={setMissionCritical}
            />
          </div>
          <div className="my-5">
            <FormTextArea
              label="Additional notes and research"
              rows={6}
              placeholder="Enter information here..."
              state={additionalNotes}
              setState={setAdditionalNotes}
            />
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
        >
          Submit Company
        </button>
      </div>
    </div>
  );
};

export default FormBody;
