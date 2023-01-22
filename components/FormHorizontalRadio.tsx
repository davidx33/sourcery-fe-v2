import { FC } from "react";

type Props = {
    label: string;
    options: string[][];
    setState: React.Dispatch<React.SetStateAction<any>>;
}

const FormHorizontalRadio: FC<Props> = ({ label, options, setState }) => {
    return (
        <>
            <h3 className="font-semibold text-gray-400 py-2">{label}</h3>
            <div className="flex">
                {options.map((option, index) => {
                    const optionLabel = option[0];
                    const optionValue = option[1];
                    return (
                        <div key={`${label}-${index}`} className="flex items-center mr-4" onChange={e => setState((e.target as HTMLInputElement).value)}>
                            <input id={`inline-radio-${index}`} type="radio" value={optionValue} name={label} className="w-4 h-4 text-gray-500 bg-gray-600"></input>
                            <label htmlFor={`inline-radio-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{optionLabel}</label>
                        </div>
                    );
                })
                }
            </div>
        </>
    );
};

export default FormHorizontalRadio;