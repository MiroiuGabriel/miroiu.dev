import Link from 'next/link';
import { type FC } from 'react';

type FooterLinkProps = { children: string; href: string; isExternal?: boolean };

export const FooterLink: FC<FooterLinkProps> = ({
	href,
	children,
	isExternal,
}) => {
	//opacity
	return (
		<>
			{isExternal ? (
				<a
					className="no-underline w-full transition-colors duration-300 ease-out text-ui dark:text-ui-dark dark:hover:text-ui-dark-hover hover:text-ui-hover"
					href={href}
					target="_blank"
					rel="noreferrer"
				>
					{children}
				</a>
			) : (
				<Link href={href}>
					<a className="no-underline w-full transition-colors duration-300 ease-out text-ui dark:text-ui-dark dark:hover:text-ui-dark-hover hover:text-ui-hover">
						{children}
					</a>
				</Link>
			)}
		</>
	);
};
