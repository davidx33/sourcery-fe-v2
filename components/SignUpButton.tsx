import { FC } from "react";
import { signIn } from "next-auth/react";

const SignUpButton: FC = () => {
	return (
		<button
			onClick={() => signIn('Google', { callbackUrl: '/profile' })}
			className="text-black bg-white px-5 py-2 rounded-full font-semibold"
		>
			Sign up
		</button>
	);
}

export default SignUpButton;