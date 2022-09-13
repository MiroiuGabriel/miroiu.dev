import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa';
import { iconMap } from '../../fixtures/snippets';

type FeaturedSnippetProps = {
	title: string;
	gradient: string;
	slug: string;
	summary: string;
	icon: string;
};

//TODO: fix focus ring around featured post

export const FeaturedSnippet: React.FC<FeaturedSnippetProps> = ({
	title,
	slug,
	gradient,
	icon = 'react',
	summary,
}) => {
	return (
		<Link href={`/snippets/${slug}`}>
			<a className="no-underline">
				<div
					className={`p-1 h-full flex flex-col content-between rounded-xl ${gradient}`}
				>
					<div className="flex flex-col rounded-xl p-4 h-full bg-white dark:bg-background gap-2">
						<div className="p-1.5 rounded-full bg-gray-100 dark:bg-contrast w-fit">
							{iconMap[icon]()}
						</div>
						<h4 className="font-medium text-lg">{title}</h4>
						<p className="mb-6 text-ui dark:text-ui-dark grow">
							{summary}
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};
