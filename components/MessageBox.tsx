import { FC } from "react";
import { Message } from "@prisma/client";

type Props = {
  messages: Message[];
  hasUnread: boolean;
};

const MessagesBox: FC<Props> = ({ hasUnread, messages }) => {
  return (
    <div className="group relative">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-400" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
        <path d="M4 13h3l3 3h4l3 -3h3"></path>
      </svg>

      <span className="absolute top-0 right-0 bg-red-400" style={{ borderRadius: "50%", display: "inline-block", height: "10px", width: "10px" }}></span>

      <div className="absolute top-1/2 right-1/2 hidden group-hover:block bg-slate-200 rounded-lg p-3 w-[200px]">Coming Soon!</div>
    </div>
  );
};

export default MessagesBox;
