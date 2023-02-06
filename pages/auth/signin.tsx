import { NextPage } from "next";
import LoginModal from "../../components/loginModal";

const SignIn: NextPage = () => {
	return (
		<div className="bg-polka h-screen">
			<LoginModal />
		</div>
	);
};

export default SignIn;