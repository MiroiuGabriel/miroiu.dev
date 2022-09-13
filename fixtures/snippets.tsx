import { type ReactNode } from 'react';
import { FaReact, FaSpotify } from 'react-icons/fa';
import { green, blue } from 'tailwindcss/colors';

export const iconMap: Record<string, (size?: number) => ReactNode> = {
	spotify: (size: number = 24) => (
		<FaSpotify size={size} color={green[500]} />
	),
	react: (size: number = 24) => <FaReact size={size} color={blue[400]} />,
};
