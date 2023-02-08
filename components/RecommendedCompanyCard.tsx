import { FC } from "react";

type Props = {
  name: string;
  industry: string;
  url: string;
};

const RecommendedCompanyCard: FC<Props> = ({ name, industry, url }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="flex items-center justify-center rounded-full ring-8 ring-indigo-400 p-2 w-12 h-12 text-center font-bold text-slate-800 mb-3">{name.charAt(0)}</div>
      </div>
      <a target="_blank" rel="noopener noreferrer" href={url} className="text-slate-800 font-semibold underline">{name}</a>
      <p className="text-slate-400 text-center font-semibold">{industry}</p>
    </div>
  );
};

export default RecommendedCompanyCard;