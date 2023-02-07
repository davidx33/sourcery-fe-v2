import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { NextPage } from "next";
import ProfilePhoto from "./ProfilePhoto";

const ProfileHeader: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <></>;
  }

  return (
    <div className="rounded-xl bg-white py-10 h-full">
      <ProfilePhoto radius={45} src={session.user?.image} name={session.user?.name} />
      <h3 className="text-center font-semibold text-gray-700 text-xl">
        {session.user?.name}
      </h3>
      <h3 className="pb-2 text-center font-semibold text-gray-500">
        {session.user?.email}
      </h3>

      <div className="flex flex-col items-center justify-center">
        <Link href="/payments" className="flex text-gray-700 underline">
          Edit payment details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
            <path d="M3 10l18 0"></path>
            <path d="M7 15l.01 0"></path>
            <path d="M11 15l2 0"></path>
          </svg>
        </Link>
        <Link href="/viability" className="flex text-gray-700 underline pt-3">
          Rewards for sourcing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 17l0 .01"></path>
            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
