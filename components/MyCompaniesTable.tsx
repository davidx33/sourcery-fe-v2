import { FC } from "react";
import type { Submission } from "@prisma/client";

type Props = {
    submissions: Submission[];
}

const MyCompaniesTable: FC<Props> = ({ submissions }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-neutral-50 dark:bg-neutral-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Submission ID</th>
                        <th scope="col" className="px-6 py-3">Date Submitted</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">View</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => {
                        return (
                            <tr className="bg-white border-b dark:bg-neutral-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{submission.id}</th>
                                <td className="px-6 py-4">{submission.createdAt.toLocaleString()}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Coming Soon</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

};

export default MyCompaniesTable;