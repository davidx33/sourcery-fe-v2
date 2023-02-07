import { FC } from "react";
import Image from "next/image";

type Props = {
	radius: number;
	src: string | null | undefined;
	name: string | null | undefined;
}

const ProfilePhoto: FC<Props> = ({ radius, src, name }) => {
	if (src == null) {
		return (
			<div className="flex justify-center">
				<div style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }} className="mb-3 font-semibold text-3xl bg-indigo-100 text-gray-600 rounded-full ring-4 ring-indigo-400 flex justify-center items-center">
					{name?.split(' ')[0][0]}{name?.split(' ')[1][0]}
				</div>
			</div>
		);
	}
	return (<Image width={radius * 2} height={radius * 2} className="ring-4 ring-indigo-400 rounded-full mx-auto" src={src} alt="Profile picture" />);
};

export default ProfilePhoto;