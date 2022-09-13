import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

type ProjectType = { image: string; slug: string; url: string; github: string };

export const Project: React.FC<ProjectType> = ({
	image,
	slug,
	url,
	github,
}) => {
	return (
		<div className="relative h-52 w-96 flex-none group">
			<Image
				src={image}
				alt={slug}
				layout="fill"
				draggable="false"
				className="rounded-md -z-10"
				priority
			/>
			<div className="inset-0 w-full h-full group-hover:bg-overlay flex justify-center items-center text-center transition-background duration-300 ease-in-out gap-4 text-white">
				<a
					href={github}
					className="invisible group-hover:visible z-10"
					target="_blank"
					rel="noreferrer"
					title="Github Repository"
				>
					<BsGithub size={32} />
				</a>
				<a
					href={url}
					className="invisible group-hover:visible z-10"
					target="_blank"
					rel="noreferrer"
					title="Open Link"
				>
					<FiExternalLink size={32} />
				</a>
			</div>
		</div>
	);
};
