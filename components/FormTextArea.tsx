import { FC } from "react";

type Props = {
  label: string;
  rows: number;
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<any>>;
  state: string;
};

const FormTextArea: FC<Props> = ({ label, rows, placeholder, setState, state }) => {
  return (
    <>
      <div className="pt-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {label}
        </label>
      </div>

      <div className="pt-2">
        <textarea
          id="message"
          rows={rows}
          className="block p-2.5 w-full text-sm  bg-text-gray-500 rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-white dark:focus:border-white"
          placeholder={placeholder}
          onChange={e => setState(e.target.value)} value={state}
        ></textarea>
      </div>
    </>
  );
};

export default FormTextArea;
