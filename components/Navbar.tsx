import Link from "next/link";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import SignUpButton from "./SignUpButton";

const Navbar: NextPage = () => {
  const { data: session, status } = useSession();

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
        <button
          onClick={() => signIn('Google', { callbackUrl: '/dashboard' })}
          className="text-white px-5 py-2 font-semibold"
        >
          Log in
        </button>
      </>
    );
  }

  if (session) {
    content = (
      <>
        <h3 className="text-white font-semibold underline">
          <Link href="/profile">
            {session.user?.name}
          </Link>
        </h3>
        <button className="px-5 py-3 rounded-md" onClick={() => signOut()}>
          <a className="text-white font-semibold" href="#">
            Sign Out
          </a>
        </button>
      </>
    );
  }

  return (
    <div className="bg-black flex flex-row items-center pb-5 pt-10 justify-between px-20">
      <div className="flex flex-row">
        <Link href="/">
          <h1 className="text-white text-2xl font-semibold">Sourcery</h1>
        </Link>
      </div>
      <div className="flex flex-row">
        {/* <h2 className="text-white cursor-pointer pr-5 font-semibold">
          <Link href="/profile">Profile</Link>
        </h2> */}
        <h2 className="text-white cursor-pointer pl-5 font-semibold">
          <Link href="/dashboard">
            <h1>Product</h1>
          </Link>
        </h2>
      </div>
      <div className="flex flex-row items-center justify-end pr-5">
        {content}
      </div>
    </div>
  );
};

export default Navbar;
