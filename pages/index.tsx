import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Layout, Carousel, FeaturedSnippet, Project } from '../components';
import Link from 'next/link';
import Image from 'next/image';
import { skills } from '../fixtures/skills';
import projects from '../fixtures/projects.json';
import { BsArrowRight, BsGithub, BsSpotify } from 'react-icons/bs';

const Home: NextPage = () => {
	return (
		<Layout
			meta={{
				title: 'Miroiu Gabriel - Fullstack Developer',
				description: 'Miroiu Gabriel - Fullstack Developer',
				type: 'Portfolio, Web dev, Fullstack',
			}}
		>
			<div className="flex flex-col-reverse sm:flex-row">
				<div className="flex flex-col pr-8">
					<h1 className="text-3xl sm:text-5xl font-bold">
						Miroiu Gabriel
					</h1>
					<p className="mt-1">Fullstack Developer</p>
					<p className="mt-4 text-ui dark:text-ui-dark">
						I&#39;m a computer science student who loves web
						development and building awesome projects.
					</p>
				</div>
				<div className="relative w-24 h-24 sm:w-32 sm:h-32 aspect-square mb-8 sm:ml-auto rounded-full">
					<Image
						className="rounded-full"
						alt="profile picture"
						src="/image/profile.webp"
						layout="fill"
						objectFit="cover"
						priority
					/>
				</div>
			</div>

			<h3 className="text-2xl sm:text-4xl font-bold mt-12">Skills</h3>
			<p className="mt-1 text-ui dark:text-ui-dark">
				Languages, frameworks, and tools that I learned from building
				web applications.
			</p>
			<div className="flex flex-wrap mt-6 gap-4">
				{skills.map((skill, i) => (
					<skill.icon size={56} key={i} title={skill.text} />
				))}
			</div>
			<h3 className="text-2xl sm:text-4xl font-bold mt-12">Projects</h3>
			<p className="mt-1 text-ui dark:text-ui-dark">
				Awesome projects I created in my free time.
			</p>
			<Carousel numberOfitems={projects.length}>
				{projects.map((project, i) => (
					<Project
						key={i}
						image={project.image}
						slug={project.slug}
						url={project.url}
						github={project.github}
					/>
				))}
			</Carousel>
			<h3 className="text-2xl sm:text-4xl font-bold mt-12">
				Featured Snippets
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<FeaturedSnippet
					gradient="bg-gradient-to-bl from-pink-500 to-blue-400"
					title="React"
					summary="Copy text to clipboard"
					icon="react"
					slug="use-copy-to-clipboard"
				></FeaturedSnippet>
				<FeaturedSnippet
					gradient="bg-gradient-to-bl from-yellow-300 to-green-500"
					title="React"
					summary="Detect click outside of component"
					icon="react"
					slug="use-click-outside"
				></FeaturedSnippet>
				<FeaturedSnippet
					gradient="bg-gradient-to-bl from-purple-700 to-blue-500"
					title="React"
					summary="Detect if mouse is hovering over element"
					icon="react"
					slug="use-debounce"
				></FeaturedSnippet>
			</div>
			<Link href="/snippets">
				<a className="flex items-center mt-8 group hover text-ui dark:text-ui-dark dark:hover:text-ui-dark-hover hover:text-ui-hover transition-colors duration-300 ease-in-out">
					All snippets
					<BsArrowRight
						size={24}
						className="ml-2 group-hover:ml-4 group-focus:ml-4 transition-margin duration-300 ease-in-out"
					/>
				</a>
			</Link>
		</Layout>
	);
};

export default Home;
