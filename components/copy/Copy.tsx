import { FC, ReactNode, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { MdOutlineContentCopy } from 'react-icons/md';
import { useWindowSize } from '../../hooks';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export const Copy: FC<{ children: ReactNode; code: string }> = ({
	children,
	code,
}) => {
	const [value, copy, setValue] = useCopyToClipboard();
	const { width, height } = useWindowSize();

	useEffect(() => {
		let timeoutID: NodeJS.Timeout;
		if (value) {
			timeoutID = setTimeout(() => setValue(null), 3000);
		}
		return () => {
			clearTimeout(timeoutID);
		};
	}, [value, setValue]);

	return (
		<>
			<div className="relative">
				{children}
				<button
					className="flex items-center absolute top-3 right-3 p-2 bg-gray-100 dark:bg-contrast rounded-full hover:ring-2 transition-all duration-200 ease-in-out ring-black dark:ring-white"
					title="copy to clipboard"
					onClick={() => copy(code)}
				>
					<MdOutlineContentCopy size={24} />
				</button>
			</div>
			{value && (
				<Confetti width={width} height={height} className="absolute" />
			)}
		</>
	);
};
