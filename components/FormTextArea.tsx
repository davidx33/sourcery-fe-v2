import { FC } from "react";

type Props = {
  label: string;
  rows: number;
  placeholder: string;
};

const FormTextArea: FC<Props> = ({ label, rows, placeholder }) => {
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
          className="block p-2.5 w-full text-sm text-gray-900 bg-black rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
          placeholder={placeholder}
        ></textarea>
      </div>
    </>
  );
};

export default FormTextArea;
