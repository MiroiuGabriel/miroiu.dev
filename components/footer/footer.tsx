import {
	Box,
	Divider,
	GridItem,
	SimpleGrid,
	VStack,
	Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { NowPlaying } from '../now-playing';

type FooterLinkProps = { children: string; href: string };

const FooterLinkExternal: React.FC<FooterLinkProps> = ({ href, children }) => {
	return (
		<Link
			textDecoration="none !important"
			borderRadius={4}
			opacity={0.8}
			_hover={{
				opacity: 0.6,
			}}
			href={href}
		>
			{children}
		</Link>
	);
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
	return (
		<NextLink href={href} passHref>
			<Link
				textDecoration="none !important"
				borderRadius={4}
				opacity={0.8}
				_hover={{
					opacity: 0.6,
				}}
			>
				{children}
			</Link>
		</NextLink>
	);
};

export const Footer = () => {
	return (
		<Box pb={4} as="footer">
			<Divider mb={8} />
			<NowPlaying />
			<SimpleGrid columns={[1, 3, 3]} w="full" spacing={4}>
				<GridItem>
					<VStack alignItems="left" spacing={4}>
						<FooterLink href="/">Home</FooterLink>
						<FooterLink href="/about">About</FooterLink>
						<FooterLinkExternal href="/resume.pdf">
							Resume
						</FooterLinkExternal>
					</VStack>
				</GridItem>
				<GridItem>
					<VStack alignItems="left" spacing={4}>
						<FooterLinkExternal href="https://www.linkedin.com/in/miroiu-gabriel/">
							Linkedin
						</FooterLinkExternal>
						<FooterLinkExternal href="https://github.com/MiroiuGabriel">
							Github
						</FooterLinkExternal>
						<FooterLink href="https://open.spotify.com/user/215fyxejfuikxtr2wrg66szpa">
							Spotify
						</FooterLink>
					</VStack>
				</GridItem>
				<GridItem>
					<VStack alignItems="left" spacing={4}>
						<FooterLink href="/snippets">Snippets</FooterLink>
						<FooterLink href="/blog">Blog</FooterLink>
					</VStack>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};
