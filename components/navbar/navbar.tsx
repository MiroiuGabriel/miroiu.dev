import { SkipToMain } from './SkipToMain';
import { NavLink } from './NavLink';
import { ThemeButton } from './ThemeButton';

export const Navbar = () => {
	return (
		<nav className="flex justify-between items-center pt-8 pb-6 sm:pb-12 relative">
			<SkipToMain />
			<div className="-ml-3 space-x-2">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/snippets">Snippets</NavLink>
			</div>
			<ThemeButton />
		</nav>
	);
};
