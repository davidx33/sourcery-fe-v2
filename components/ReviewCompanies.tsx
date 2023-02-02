import { FC } from "react";
import Image from "next/image";
import bluechevronright from "../pages/images/bluechevronright.png";
import { ReviewThese } from "@prisma/client";
import doubleright from "../pages/images/right.png";
import Divider from "./Divider";

type Props = {
  companies: ReviewThese[];
};

const ReviewCompanies: FC<Props> = ({ companies }) => {
  return (
    <div className="rounded-xl text-black w-full">
      <div className="flex justify-center pt-3 med:pt-0">
        <div className="flex flex-col bg-slate-100 w-full px-3 rounded-lg">
          <div className="flex flex-row justify-between items-center py-3 px-3">
            <h2 className="text-2xl">Review Companies</h2>
          </div>
          <Divider />
          {companies?.map((reviewCompany, index) => {
            return (
<<<<<<< Updated upstream
              <div className="flex flex-row justify-evenly px-3 py-5 text-xl" key={index}>
=======
              <div className="flex flex-row justify-between px-3 py-5 text-xl">
>>>>>>> Stashed changes
                <div>{reviewCompany.companyName}</div>
                <div>{reviewCompany.industry}</div>
                <div>
                  <a href={reviewCompany.url} className="cursor-pointer">
                    <Image src={doubleright} alt="" width={30} height={30} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewCompanies;
