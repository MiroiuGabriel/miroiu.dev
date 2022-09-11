import { TbSun, TbMoon } from 'react-icons/tb';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

export const ThemeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	}, [resolvedTheme, setTheme]);

	const themeIcon =
		resolvedTheme === 'dark' ? <TbSun size={20} /> : <TbMoon size={20} />;

	return (
		<button
			onClick={toggleTheme}
			aria-label="switch theme"
			className="bg-gray-100 dark:bg-contrast p-2 rounded-lg flex justify-center items-center outline-2 hover:outline"
		>
			{mounted ? (
				themeIcon
			) : (
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					className="w-5 h-5"
				/>
			)}
		</button>
	);
};
