import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import bluechevronright from "../pages/images/bluechevronright.png";
import Divider from "./Divider";
import { MessageBoard } from "@prisma/client";

type Props = {
  messages: MessageBoard[];
};

const MessageBoard: FC<Props> = ({ messages }) => {
  return (
    <div className="rounded-xl text-black w-full">
      <div className="flex justify-center pt-3 med:pt-0">
        <div className="flex flex-col bg-slate-100 w-full px-3 rounded-lg">
          <div className="flex flex-row justify-between items-center py-3 px-3">
            <h2 className="text-2xl">Message Box</h2>
          </div>
          <Divider />
          {messages?.map((message, index) => {
            return (
              <div className="flex flex-row py-5 justify-center items-center">
                <div className="flex flex-col items-center border border-slate-500 rounded-lg px-3 py-3">
                  <div className="text-slate-500 text-xl">
                    {message.sentMonth}
                  </div>
                  <div className="text-black text-2xl">{message.sentDate}</div>
                </div>
                <div className="flex flex-col pl-5">
                  <div className="text-2xl pb-2">{message.header}</div>
                  <div className="text-sm">{message.welcomeMessage}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
