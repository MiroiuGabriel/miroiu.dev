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

export const skills: Array<{ icon: IconType; text: string }> = [
	{ icon: SiNextdotjs, text: 'Next.js' },
	{ icon: FaReact, text: 'React' },
	{ icon: SiTypescript, text: 'TypeScript' },
	{ icon: SiJavascript, text: 'JavaScript' },
	{ icon: FaNode, text: 'NodeJS' },
	{ icon: FaHtml5, text: 'HTML5' },
	{ icon: SiMongodb, text: 'MongoDB' },
	{ icon: SiFirebase, text: 'Firebase' },
	{ icon: SiChakraui, text: 'Chakra-UI' },
	{ icon: SiTailwindcss, text: 'Tailwind' },
	{ icon: SiBootstrap, text: 'Bootstrap' },
	{ icon: SiCss3, text: 'CSS' },
	{ icon: FaNpm, text: 'NPM' },
	{ icon: SiGithub, text: 'Github' },
	{ icon: SiFigma, text: 'Figma' },
	{ icon: SiVisualstudiocode, text: 'VS Code' },
];
