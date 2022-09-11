import {
	FC,
	ReactNode,
	useEffect,
	useRef,
	useState,
	type PointerEvent,
} from 'react';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

const clamp = (num: number, min: number, max: number) =>
	Math.min(Math.max(num, min), max);

type CarouselProps = {
	children: ReactNode;
	numberOfitems: number;
};

const scrollOptions: ScrollIntoViewOptions = {
	behavior: 'smooth',
	block: 'nearest',
	inline: 'center',
};

export const Carousel: FC<CarouselProps> = ({ children, numberOfitems }) => {
	const index = useRef(0);
	const listRef = useRef<HTMLDivElement>(null);

	const increment = () => {
		if (index.current >= numberOfitems - 1) return;

		++index.current;

		const list = listRef.current;
		const node = list?.childNodes[index.current] as HTMLDivElement;
		node.scrollIntoView(scrollOptions);
	};

	const decrement = () => {
		if (index.current <= 0) return;

		--index.current;
		const list = listRef.current;
		const node = list?.childNodes[index.current] as HTMLDivElement;
		node.scrollIntoView(scrollOptions);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex justify-end gap-2">
				<button
					className="rounded-full p-1 border border-gray-100 hover:bg-gray-100 dark:border-contrast dark:hover:bg-contrast transition-background duration-300 ease-in-out"
					onClick={decrement}
				>
					<BiCaretLeft size={24} />
				</button>
				<button
					className="rounded-full p-1 border border-gray-100 hover:bg-gray-100 dark:border-contrast dark:hover:bg-contrast transition-background duration-300 ease-in-out"
					onClick={increment}
				>
					<BiCaretRight size={24} />
				</button>
			</div>
			<div
				className="flex overflow-x-hidden space-x-2 rounded-md"
				ref={listRef}
			>
				{children}
			</div>
		</div>
	);
};
