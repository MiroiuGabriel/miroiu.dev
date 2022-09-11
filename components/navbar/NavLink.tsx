import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const NavLink: FC<{ href: string; children: string }> = ({
	href,
	children,
}) => {
	const router = useRouter();
	const pathName = router.pathname;
	const isActive =
		pathName === href
			? 'font-semibold'
			: 'font-normal text-ui dark:text-ui-dark';
	//opacity hover
	return (
		<Link href={href}>
			<a
				className={`px-3 py-2 rounded-lg hover:bg-gray-100 hover:dark:bg-contrast transition-background duration-200 ease-in ${isActive}`}
			>
				{children}
			</a>
		</Link>
	);
};
