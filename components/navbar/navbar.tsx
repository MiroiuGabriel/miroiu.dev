import {
	Flex,
	HStack,
	Icon,
	IconButton,
	useColorMode,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsMoon, BsSun } from 'react-icons/bs';
import NextLink from 'next/link';

const ThemeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const themeIcon =
		colorMode === 'dark' ? <Icon as={BsSun} /> : <Icon as={BsMoon} />;
	return (
		<IconButton
			icon={themeIcon}
			onClick={toggleColorMode}
			aria-label="switch theme"
		/>
	);
};

const NavLink: React.FC<{ href: string; children: string }> = ({
	href,
	children,
}) => {
	const router = useRouter();
	const pathName = router.pathname;
	const hover = useColorModeValue('gray.100', 'whiteAlpha.200');
	const isActive = pathName === href;
	return (
		<NextLink href={href} passHref>
			<Link
				px={3}
				py={2}
				fontWeight={isActive ? 'semibold' : 'normal'}
				opacity={isActive ? 1 : 0.8}
				borderRadius={8}
				_hover={{
					bg: hover,
				}}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const SkipToMain = () => {
	const bg = useColorModeValue('white', 'gray.800');
	return (
		<Link
			href="#skip"
			position="absolute"
			left={['0', '0', '-25%']}
			top="-64px"
			bg={bg}
			py={3}
			px={4}
			borderRadius={4}
			zIndex={1}
			_focus={{
				transform: 'translateY(88px)',
			}}
			textDecoration="none !important"
		>
			Skip to main
		</Link>
	);
};

export const Navbar = () => {
	return (
		<Flex
			as="nav"
			justifyContent="space-between"
			pt={8}
			pb={[6, 12]}
			position="relative"
		>
			<SkipToMain />
			<HStack ml={-3}>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/blog">Blog</NavLink>
				<NavLink href="/snippets">Snippets</NavLink>
			</HStack>
			<ThemeButton />
		</Flex>
	);
};
