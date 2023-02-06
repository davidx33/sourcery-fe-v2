import { FC } from "react";

type Props = {
	viewId: string;
};

const AirtableEmbed: FC<Props> = ({ viewId }) => {
	return (
		<iframe
			className="h-5/6"
			src={`https://airtable.com/embed/${viewId}?backgroundColor=blue&viewControls=on`}
			width="100%"
			style={{ background: "transparent", border: "1px solid #ccc", }}>
		</iframe>
	);
}

export default AirtableEmbed;