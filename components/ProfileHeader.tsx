import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfileHeader: NextPage = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return <></>;
  }

  return (
    <div className="rounded-xl bg-gray-50 py-10 h-full">
      <Image className='w-20 h-20 ring-4 ring-indigo-500 rounded-full mx-auto mb-4' src={session.user?.image as string} alt="Profile picture" height={90} width={90} />
      <h3 className="text-center font-semibold text-gray-700 text-xl">{session.user?.name}</h3>
      <h3 className="pb-2 text-center font-semibold text-gray-500">{session.user?.email}</h3>
      <div className="flex justify-center">
        <Link href="/payments" className="flex text-gray-700 underline">
          Payment Information
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
            <path d="M3 10l18 0"></path>
            <path d="M7 15l.01 0"></path>
            <path d="M11 15l2 0"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
