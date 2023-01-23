import React from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import linkedin from "../pages/images/linkedin.png";
import twitter from "../pages/images/twitter.png";


const ProfileHeader: NextPage = () => {
  const { data: session, status } = useSession();

  let content;

  if (!session) {
    content = (
      <>
      </>
    );
  }

  if (session) {
    content = (
      <div className="flex flex-col md:flex-row">
        <Image className='w-20 h-20 ring-2 ring-gray-300 rounded-full' src={session.user?.image as string} alt="Profile picture" height={200} width={200} />
        <div className="flex flex-col pl-10">
          <h1 className="text-white font-bold text-3xl pb-2">{session.user?.name}</h1>
          <h2 className="text-gray-300 text-xl pb-2">{session.user?.email}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 py-5 bg-neutral-900 rounded-xl mb-5">
      <h1 className="text-white text-2xl font-semibold">My Profile</h1>
      <div className="flex justify-center">
        {content}
      </div>
    </div>
  );
};

export default ProfileHeader;