import Image from 'next/image';
import { Layout } from '../components/layout';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const FourOhFour = () => {
	const { resolvedTheme } = useTheme();

	return (
		<Layout>
			<div className="flex flex-col-reverse lg:flex-row mb-12">
				<div className="flex flex-col mr-0 mt-4 lg:mr-4 lg:mt-0">
					<h1 className="text-2xl md:text-4xl font-bold mb-2">
						Ooops, you&apos;re not supposed to be here!
					</h1>
					<p>
						This page is being implemented or it doesn&apos;t exist.
						Either way, you should probably head back.
					</p>
					<NextLink href="/">
						<button className="my-4 bg-gray-100 dark:bg-contrast py-2 px-1 font-semibold rounded-md outline-2 hover:outline">
							Return Home
						</button>
					</NextLink>
				</div>

				<Image
					src={`/404-${resolvedTheme}.svg`}
					width={240}
					height={240}
					alt="page not found"
				/>
			</div>
		</Layout>
	);
};

export default FourOhFour;
