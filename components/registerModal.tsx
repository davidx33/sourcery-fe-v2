import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const RegisterModal: FC = () => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const { handleSubmit, register, reset, formState: { errors, isSubmitting }, } = useForm();
    const onSubmit = async (values: any) => {
        const body = { ...values };
        if (body.password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        fetch(`/api/user/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => {
            if (response.ok) {
                signIn("credentials", {
                    email: body.email,
                    password: body.password,
                    callbackUrl: 'profile',
                });
            }
        })
    }

    return (
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center">
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create an account on Sourcery</h3>
                        <p className={(error.length > 0 ? "" : "hidden ") + "text-center text-white bg-red-400 py-2 rounded-xl opacity-90 mb-3"}>{error}</p>
                        <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
                                <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Jane Doe" required></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input {...register('email')} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input {...register('password')} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm your password</label>
                                <input type="password" onChange={e => setConfirmPassword(e.target.value)} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                            </div>
                            <input type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Sign Up"></input>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Already have an account? <a href="/auth/signin" className=" text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
                            </div>
                        </form>
                        <button onClick={() => signIn("google", { callbackUrl: '/profile' })} className="text-white bg-gray-600 shadow-md w-full py-3 px-4 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm text-center mb-2 mt-4">
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default RegisterModal;