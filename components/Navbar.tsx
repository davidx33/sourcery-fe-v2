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
          onClick={() => signIn("Google", { callbackUrl: "/profile" })}
          className="md:px-5 pl-2 py-2 font-semibold"
        >
          Log in
        </button>
      </>
    );
  }

  if (session) {
    content = (
      <div className="flex flex-col md:flex-row items-center">
        <h3 className="font-semibold underline">
          <Link href="/profile">{session.user?.name}</Link>
        </h3>
        <button
          className="md:px-5 pl-2 py-3 rounded-md"
          onClick={() => signOut()}
        >
          <a className="font-semibold" href="#">
            Sign Out
          </a>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center pb-5 pt-5 justify-between px-10 md:px-20 bg-slate-100">
      <div className="flex flex-row">
        <Link href="/">
          <h1 className=" text-2xl font-bold">Sourcery</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-end pr-5">
        {content}
      </div>
    </div>
  );
};

export default Navbar;
