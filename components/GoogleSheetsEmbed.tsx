import { FC } from "react";

type Props = {
  sheetsEmbed: string;
  
};

const GoogleSheetsEmbed: FC<Props> = ({ sheetsEmbed }) => {
  return (
    <>
      <iframe
        className="h-5/6"
        src={sheetsEmbed}
        width="100%"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </>
  );
};

export default GoogleSheetsEmbed;