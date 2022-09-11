import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { useState, type FC } from 'react';
import { useTheme } from 'next-themes';

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="px-8 w-full">
			<div className="max-w-2xl mx-auto">
				<Navbar />
				<main id="skip" className="scroll-m-5">
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
};
