import { FC } from 'react'

type Props = {
	label: string;
	options: string[];
	selectName: string;
	setState: React.Dispatch<React.SetStateAction<any>>;
	state: string;
}

const FormSelect: FC<Props> = ({ label, options, selectName, setState, state }) => {
	return (
		<div>
			<label htmlFor={selectName} className="sr-only">{label}</label>
			<select id={selectName} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-blakc dark:border-black focus:outline-none focus:ring-0 focus:border-black peer" value={state} onChange={e => setState(e.target.value)}>
				<option value="" className="bg-black">{label}</option>
				{options.map((option, index) => {
					return (
						<option key={index} value={option} className="bg-gray-800">{option}</option>
					);
				})}
			</select>
		</div>
	);
};

export default FormSelect;