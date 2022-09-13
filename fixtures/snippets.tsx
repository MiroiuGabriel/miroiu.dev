import { type ReactNode } from 'react';
import { FaSpotify } from 'react-icons/fa';

export const iconMap: Record<string, (size?: number) => ReactNode> = {
	spotify: (size: number = 24) => (
		<FaSpotify size={size} className="text-green-500" />
	),
};
