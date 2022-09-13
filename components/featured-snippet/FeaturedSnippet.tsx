import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa';

type FeaturedSnippetProps = {
	title: string;
	gradient: string;
	slug: string;
};

//TODO: fix focus ring around featured post

export const FeaturedSnippet: React.FC<FeaturedSnippetProps> = ({
	title,
	slug,
	gradient,
}) => {
	return (
		<Link href={`/blog/${slug}`}>
			<a className="no-underline">
				<div
					className={`p-1 h-full flex flex-col content-between rounded-xl ${gradient}`}
				>
					<div className="flex flex-col rounded-xl p-4 h-full bg-white dark:bg-background gap-2">
						<div className="p-1.5 rounded-full bg-gray-100 dark:bg-contrast w-fit">
							<FaSpotify
								size={24}
								className="text-green-500"
							></FaSpotify>
						</div>
						<h4 className="font-medium text-lg grow">Spotify</h4>
						<p className="mb-6 text-ui dark:text-ui-dark">
							See what song you are listening to
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};
