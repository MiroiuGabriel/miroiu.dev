import { Footer } from '../footer';
import { Navbar } from '../navbar';
import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type LayoutProps = {
	children: ReactNode;
	meta: {
		title: string;
		description: string;
		type: string;
	};
};

export const Layout: FC<LayoutProps> = ({ children, meta }) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https://miroiu-dev.vercel.app${router.asPath}`}
				/>
				<link
					rel="canonical"
					href={`https://miroiu-dev.vercel.app${router.asPath}`}
				/>
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Miroiu Gabriel" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
			</Head>
			<div className="px-8 w-full">
				<div className="max-w-2xl mx-auto">
					<Navbar />
					<main id="skip" className="scroll-m-5">
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
};
