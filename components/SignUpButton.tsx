import { FC } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const SignUpButton: FC = () => {
  return (
    <Link
      href="/auth/signup/"
      className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
    >
      Sign up
    </Link>
  );
};

export default SignUpButton;
