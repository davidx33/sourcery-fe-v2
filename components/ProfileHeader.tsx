import Link from "next/link";
import { FC } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfileHeader: FC = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return <></>;
  }

  return (
    <div className="rounded-xl bg-white py-3 px-6 h-full">
      <h2 className="text-xl font-semibold mb-5">My Profile</h2>
      <Image
        className="w-20 h-20 ring-4 ring-indigo-500 rounded-full mx-auto mb-4"
        src={session.user?.image as string}
        alt="Profile picture"
        height={90}
        width={90}
      />
      <h3 className="text-center font-semibold text-gray-700">
        {session.user?.name}
      </h3>
      <h3 className="pb-2 text-center font-semibold text-gray-400 text-sm">
        {session.user?.email}
      </h3>
      <div className="flex justify-center">
        <Link href="/payments" className="px-6 py-2.5 mr-2 mb-2 border rounded-lg flex font-medium text-sm">
          Edit payout method
          <svg
            className="ml-2 text-gray-600"
            width="20"
            height="20"
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
      </div>
    </div>
  );
};

export default ProfileHeader;
