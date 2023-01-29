import React from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import divider from "../pages/images/divider.png";
import notification from "../pages/images/notification.png";
import bluechevronright from "../pages/images/bluechevronright.png"

const ProfileHeader: NextPage = () => {
  const { data: session, status } = useSession();

  let content;

  if (!session) {
    content = <></>;
  }

  if (session) {
    content = (
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center bg-white ">
          <div className="flex flex-row rounded-lg py-5 items-center pl-10">
            <Image
              className="w-20 h-20 ring-2 ring-gray-300 rounded-lg"
              src={session.user?.image as string}
              alt="Profile picture"
              height={20}
              width={20}
            />
            <div className="flex flex-col pl-0 med:pl-10 pr-10">
              <div className="md:pl-8">
                <h1 className="text-sm pb-2">{session.user?.name}</h1>
                <h2 className="text-sm pb-2">{session.user?.email}</h2>
              </div>
            </div>
            <Image src={bluechevronright} alt="" width={20} height={20} className="rotate-90" />
          </div>
          <div className="flex flex-row items-center">
            <div>
              <p className="text-sm">Contact Sourcery HQ</p>
            </div>
            <div className="px-5">
              <Image src={divider} alt="" width={1} height={1} />
            </div>
            <div className="pr-2">
              <Image src={notification} alt="" width={60} height={60} />
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
