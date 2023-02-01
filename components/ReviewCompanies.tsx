import { FC } from "react";
import Image from "next/image";
import bluechevronright from "../pages/images/bluechevronright.png";
import { MessageBoard } from "@prisma/client";

type Props = {
  messages: MessageBoard[];
};

const MessageBoard: FC<Props> = ({ messages }) => {
  return (
    <div className="rounded-xl text-black w-full">
      {messages?.map((message, index) => {
        return (
          <div className="flex justify-center pt-3 med:pt-0">
            <div className="flex flex-col bg-slate-100 w-full px-3 rounded-lg h-56">
              <div className="flex flex-row justify-between items-center py-3 px-3">
                <h2 className="text-2xl">Message Board</h2>
                <h1 key={index}> {message.welcomeMessage} </h1>
                <div className="flex flex-row items-center pl-16">
                  <p className="text-sm text-sky-600">See more</p>
                  <div className="pl-1">
                    <Image
                      src={bluechevronright}
                      alt=""
                      height={1}
                      width={20}
                    />
                  </div>
                </div>
                {message.sentDate}
                {message.sentMonth}
                {message.welcomeMessage}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBoard;