import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Hamburger from "./svgs/hamburger";
import ProfilePhoto from "./ProfilePhoto";
import SignUpButton from "./SignUpButton";

const Navbar: NextPage = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  let content;

  if (status == "loading") {
    content = (
      <div>
        <p>Validating Session</p>
      </div>
    );
  }

  if (!session) {
    content = (
      <>
        <SignUpButton />
        <Link
          href="/auth/signin/"
          className="md:px-5 pl-2 py-2 font-semibold"
        >
          Log in
        </Link>
      </>
    );
  }

  if (session) {
    content = (
      <div className="flex items-center py-2 px-6 rounded-3xl border border-slate-300">
        <button onClick={() => setShowDropdown(!showDropdown)} className="relative">
          <Hamburger />
          <div id="dropdownInformation" className={(showDropdown ? "" : "hidden ") + "absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{session?.user?.name}</div>
              <div className="font-medium truncate">{session?.user?.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
              </li>
            </ul>
            <div className="py-2">
              <a onClick={() => signOut()} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out</a>
            </div>
          </div>
        </button>
        <Link href="/profile" className="ml-2">
          <ProfilePhoto radius={15} src={session?.user?.image} name={session?.user?.name} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-between px-10 md:px-20 bg-slate-100 py-5">
      <div className="flex flex-row">
        <Link href="/">
          <h1 className=" text-2xl font-bold">Sourcery</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-end">
        {content}
      </div>
    </div>
  );
};

export default Navbar;
