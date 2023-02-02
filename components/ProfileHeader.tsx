import React from "react";
import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import divider from "../pages/images/divider.png";
import logout from "../pages/images/logout.png";

const ProfileHeader: NextPage = () => {
  const { data: session, status } = useSession();

  let content;

  if (!session) {
    content = <></>;
  }

  if (session) {
    content = (
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-100 rounded-xl ">
          <div className="flex flex-row py-5 items-center pl-10">
            <Image
              className="w-20 h-20 ring-2 ring-gray-300 rounded-lg"
              src={session.user?.image as string}
              alt="Profile picture"
              height={20}
              width={20}
            />
            <div className="flex flex-col md:pl-0 pl-4">
              <div className="md:pl-8">
                <h1 className="text-sm pb-2">{session.user?.name}</h1>
                <h2 className="text-sm pb-2">{session.user?.email}</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center py-5">
            <div className="pr-8">
              <p className="text-sm">
                <a href="mailto:thexudavid@gmail.com">Contact Sourcery HQ</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-8">
          <h1 className="text-4xl">Sorcerer Dashboard</h1>
          <p className="py-3">Welcome back, {session.user?.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl text-black">
      <div className="flex justify-center pt-3 med:pt-0">{content}</div>
    </div>
  );
};

export default ProfileHeader;
