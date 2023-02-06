import { NextPage } from "next";
import RegisterModal from "../../components/registerModal";

const SignUp: NextPage = () => {
    return (
        <div className="bg-polka h-screen">
            <RegisterModal />
        </div>
    );
};

export default SignUp;