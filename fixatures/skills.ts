import { IconType } from 'react-icons';
import {
	SiJavascript,
	SiTypescript,
	SiCss3,
	SiMongodb,
	SiTailwindcss,
	SiChakraui,
	SiBootstrap,
	SiGithub,
	SiFigma,
	SiVisualstudiocode,
	SiFirebase,
	SiNextdotjs,
} from 'react-icons/si';
import { FaReact, FaHtml5, FaNpm, FaNode } from 'react-icons/fa';

export const skills: Array<{ id: number; icon: IconType; text: string }> = [
	{ id: 0, icon: SiNextdotjs, text: 'Next.js' },
	{ id: 1, icon: FaReact, text: 'React' },
	{ id: 2, icon: SiTypescript, text: 'TypeScript' },
	{ id: 3, icon: SiJavascript, text: 'JavaScript' },
	{ id: 4, icon: FaNode, text: 'NodeJS' },
	{ id: 5, icon: FaHtml5, text: 'HTML5' },
	{ id: 6, icon: SiMongodb, text: 'MongoDB' },
	{ id: 7, icon: SiFirebase, text: 'Firebase' },
	{ id: 8, icon: SiChakraui, text: 'Chakra-UI' },
	{ id: 9, icon: SiTailwindcss, text: 'Tailwind' },
	{ id: 10, icon: SiBootstrap, text: 'Bootstrap' },
	{ id: 11, icon: SiCss3, text: 'CSS' },
	{ id: 12, icon: FaNpm, text: 'NPM' },
	{ id: 13, icon: SiGithub, text: 'Github' },
	{ id: 14, icon: SiFigma, text: 'Figma' },
	{ id: 15, icon: SiVisualstudiocode, text: 'VS Code' },
];
