import { FC } from "react";
import Image from "next/image";
import { ReviewThese } from "@prisma/client";
import doubleright from "../pages/images/right.png";
import Divider from "./Divider";
import Vori from "../pages/images/vori.jpg";

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
          <div></div>
          {companies?.map((reviewCompany, index) => {
            return (
              <div
                className="flex flex-row justify-between px-3 py-5 text-xl"
                key={index}
              >
                <a href={reviewCompany.url} className="cursor-pointer">
                  <div className="hover:underline cursor-pointer">
                    {reviewCompany.companyName}
                  </div>
                </a>

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
