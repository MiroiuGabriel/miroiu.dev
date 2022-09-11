import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Link from 'next/link';

type FeaturedPostProps = {
	title: string;
	gradient: string;
	slug: string;
};

//TODO: fix focus ring around featured post

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
	title,
	slug,
	gradient,
}) => {
	const views = '129,420';
	return (
		<Link href={`/blog/${slug}`}>
			<a className="no-underline">
				<div
					className={`p-1 h-full flex flex-col content-between rounded-xl ${gradient}`}
				>
					<div className="flex flex-col rounded-xl p-4 h-full bg-white dark:bg-background ">
						<h4 className="mb-8 font-medium text-lg grow">
							{title}
						</h4>
						<div className="flex items-center">
							<MdOutlineRemoveRedEye size={24} />
							<p className="ml-2">{views}</p>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};
