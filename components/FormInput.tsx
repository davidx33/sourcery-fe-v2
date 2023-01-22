import { FC } from "react";

type Props = {
	inputName: string;
	label: string;
	setState: React.Dispatch<React.SetStateAction<any>>;
	state: string;
}

const FormInput: FC<Props> = ({ inputName, label, setState, state }) => {
	return (
		<>
			<input type="text" name={inputName} id={inputName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required onChange={e => setState(e.target.value)} value={state} />
			<label htmlFor={inputName} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
		</>
	);
};

export default FormInput;