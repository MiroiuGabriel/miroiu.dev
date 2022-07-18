import {
	Avatar,
	Box,
	Flex,
	HStack,
	Icon,
	Text,
	Wrap,
	Link,
	WrapItem,
	BoxProps,
	SimpleGrid,
	GridItem,
	Heading,
	Tooltip,
	useColorMode,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../components/layout';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { skills } from '../fixatures/skills';
import projects from '../fixatures/projects.json';
import { FeaturedPost } from '../components/featured-post';
import { BsArrowRight } from 'react-icons/bs';

export const ChakraNextImage = ({
	src,
	alt,
	...rest
}: { src: string; alt: string } & Omit<BoxProps, 'as'>) => {
	return (
		<Box position="relative" {...rest}>
			<NextImage
				objectFit="cover"
				layout="fill"
				src={src}
				alt={alt}
				style={{ borderRadius: 8 }}
				priority={true}
			/>
		</Box>
	);
};

const onHover = {
	filter: 'brightness(0.7)',
	transition: 'filter 200ms ease-in-out',
};

const Project: React.FC<{ image: string; slug: string }> = ({
	image,
	slug,
}) => {
	return (
		<NextLink href={`/project/${slug}`} passHref>
			<Link borderRadius={8} _focus={onHover}>
				<ChakraNextImage
					src={image}
					alt={slug}
					w={320}
					h={200}
					_hover={onHover}
				/>
			</Link>
		</NextLink>
	);
};

//TODO: ADD color variable for theme change

const Home: NextPage = () => {
	const { colorMode } = useColorMode();
	console.log(colorMode);
	return (
		<>
			<Head>
				<title>Miroiu Gabriel - Freelance Frontend Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Flex direction={['column-reverse', 'row']}>
					<Box flexDirection="column" pr={8}>
						<Heading
							as="h1"
							fontSize={['3xl', '5xl']}
							fontWeight="bold"
						>
							Miroiu Gabriel
						</Heading>
						<Text>Frontend Web Developer</Text>
						<Text mt={4} mb={12} opacity={0.8}>
							Helping developers build a faster web. Teaching
							about web development, serverless, and React /
							Next.js.
						</Text>
					</Box>
					<Avatar
						mt={5}
						mb={[6]}
						name="Miroiu Gabriel"
						size={['xl', '2xl']}
						src="https://media-exp1.licdn.com/dms/image/C4D03AQGc4NkBLrvmIw/profile-displayphoto-shrink_400_400/0/1651060313207?e=1663200000&v=beta&t=9mXJ6tskXpbMn7UrM1IEZypPp07kP8RoCIPaaikHRac"
					/>
				</Flex>

				<Heading as={'h3'} fontSize={['2xl', '4xl']} fontWeight="bold">
					Skills
				</Heading>
				<Text opacity={0.8} mt={1}>
					Some skills I learned from years of programming, in order of
					preference.
				</Text>
				<Wrap mt={6} mb={12} spacing={4}>
					{skills.map(skill => (
						<WrapItem key={skill.id}>
							<Tooltip label={skill.text}>
								<span>
									<Icon as={skill.icon} boxSize="14" />
								</span>
							</Tooltip>
						</WrapItem>
					))}
				</Wrap>
				<Heading as={'h3'} fontSize={['2xl', '4xl']} fontWeight="bold">
					Projects
				</Heading>
				<Text opacity={0.8} mt={1}>
					Projects i had fun working on.
				</Text>
				<HStack
					mt={6}
					mb={12}
					py={2}
					px={1}
					overflowX="hidden"
					sx={{
						'&::-webkit-scrollbar': {
							display: 'none',
						},
					}}
					overflow="scroll"
					borderRadius={8}
					spacing={2}
				>
					{projects.map(project => (
						<Project
							image={project.image}
							slug={project.slug}
							key={project.id}
						/>
					))}
				</HStack>
				<Heading as={'h3'} fontSize={['2xl', '4xl']} fontWeight="bold">
					Featured Posts
				</Heading>
				<SimpleGrid columns={[1, 1, 3]} spacing={6} mt={6}>
					<GridItem>
						<FeaturedPost
							gradient="linear-gradient(135deg, #f02fc2 0%,#6094ea 100%)"
							title="Everything I Know About Style Guides, Design Systems, and
					Component Libraries"
							slug=""
						></FeaturedPost>
					</GridItem>
					<GridItem>
						<FeaturedPost
							gradient="linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%)"
							title="Rust Is The Future of JavaScript Infrastructure"
							slug=""
						></FeaturedPost>
					</GridItem>
					<GridItem>
						<FeaturedPost
							gradient="linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)"
							title="Past, Present, and Future of React State Management"
							slug=""
						></FeaturedPost>
					</GridItem>
				</SimpleGrid>
				<Flex mt={8} mb={12}>
					<NextLink passHref href="/blog">
						<Link alignItems="center" borderRadius={4}>
							<Flex opacity={0.8}>
								All posts{' '}
								<Icon as={BsArrowRight} boxSize={6} ml={2} />
							</Flex>
						</Link>
					</NextLink>
				</Flex>
			</Layout>
		</>
	);
};

export default Home;
