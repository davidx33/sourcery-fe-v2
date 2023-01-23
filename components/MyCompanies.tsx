import { FC } from "react";
import Link from "next/link";
import MyCompaniesTable from "./MyCompaniesTable";
import { Submission } from "@prisma/client";

type Props = {
  submissions: Submission[];
}

const MyCompanies: FC<Props> = ({ submissions }) => {
  return (
    <div className="px-10 py-5 bg-neutral-900 rounded-xl mb-5">
      <div className="flex flex-col md:flex-row mb-5 pb-3 med:pb-0">
        <h1 className="text-white text-2xl font-semibold">My Companies</h1>
        <Link href="/dashboard" className="bg-white shadow-lg text-neutral-900 rounded-full px-10 py-2 font-semibold ml-auto">Source New Company</Link>
      </div>
      <MyCompaniesTable submissions={submissions} />
    </div >
  );
};

export default MyCompanies;
