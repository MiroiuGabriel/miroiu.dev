import { type FC, type ReactNode, useState } from 'react';

type TooltipProps = {
	label: string;
	children: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ label, children }) => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	return children;
};
