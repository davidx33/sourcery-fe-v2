import { FC } from "react";
import { Message } from "@prisma/client";

type Props = {
  messages: Message[];
};

const MessageBoard: FC<Props> = ({ messages }) => {
  return (
    <div className="rounded-xl text-black w-full h-full bg-white">
      <div className="flex flex-col w-full px-3 rounded-lg">
        <div className="flex flex-row justify-between items-center py-3 px-3">
          <h2 className="text-xl font-semibold">Messages</h2>
        </div>
        {messages?.map((message, index) => {
          return (
            <div className="flex flex-row px-3 py-3">
              <div className="flex flex-col justify-center items-center rounded-lg px-1 py-1">
                <div className="text-slate-500 text-xl">
                  {message.sentMonth}
                </div>
                <div className="text-black text-2xl">{message.sentDate}</div>
              </div>
              <div className="flex flex-col pl-5">
                <div className="text-2xl pb-2">{message.header}</div>
                <div className="text-sm text-gray-500">{message.welcomeMessage}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageBoard;
