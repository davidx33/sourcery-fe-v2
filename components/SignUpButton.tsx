import { FC } from "react";
import { signIn } from "next-auth/react";

const SignUpButton: FC = () => {
  return (
    <button
      onClick={() => signIn("Google", { callbackUrl: "/profile" })}
      className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
    >
      Sign up
    </button>
  );
};

export default SignUpButton;
