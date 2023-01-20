import React, { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const companySectors = [
	"Healthcare",
	"Education",
	"Consumer products/food",
	"FinTech",
	"B2B SaaS",
	"Web3",
	"Other",
];

const FormBody: FC = () => {
	const router = useRouter();
	const [companyName, setCompanyName] = useState<string>("");
	const [companySector, setCompanySector] = useState<string>("");
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await fetch('/api/company', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				companyName: companyName,
				companySector: companySector,
			})
		});
		router.refresh();

	}
	return (
		<form className="py-10">
			<div className="grid md:grid-cols-2 md:gap-6">
				<FormInput label="Company Name" setState={setCompanyName} inputName="company_name" state={companyName} />
				<FormSelect label="Company Sector" setState={setCompanySector} selectName="company_sector" state={companySector} options={companySectors} />
			</div>
			<button
				onClick={handleSubmit}
				className="text-black bg-white px-5 py-2 rounded-md font-semibold"
			>
				Submit
			</button>
		</form>
	);
};

export default FormBody;
