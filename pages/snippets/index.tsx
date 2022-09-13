import { NextPage, type GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components';
import { iconMap } from '../../fixtures/snippets';
import { getAllPosts, type SnippetMeta } from '../../lib/mdxApi';

type SnippetsProps = {
	posts: SnippetMeta[];
};

const Snippets: NextPage<SnippetsProps> = ({ posts }) => {
	return (
		<Layout>
			<h1 className="text-3xl sm:text-5xl font-bold">Code Snippets</h1>
			<p className="mt-4 text-ui dark:text-ui-dark">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
				vitae ex et sapien ornare vestibulum. Sed feugiat diam id sem
				pharetra vulputate sed vitae elit.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
				{posts.map(post => (
					<Link href={`/snippets/${post.slug}`} key={post.slug}>
						<a className="p-3 border border-gray-100 dark:border-contrast rounded-md flex flex-col gap-2">
							<div className="p-1.5 rounded-full bg-gray-100 dark:bg-contrast w-fit">
								{iconMap[post.icon ?? 'react']()}
							</div>
							<h4 className="font-medium text-lg">
								{post.title}
							</h4>
							<p className="mb-1 text-ui dark:text-ui-dark grow">
								{post.summary}
							</p>
						</a>
					</Link>
				))}
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts().map(post => post.meta);
	return { props: { posts } };
};

export default Snippets;
