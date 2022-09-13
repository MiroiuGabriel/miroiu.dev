import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Layout, Copy } from '../../components';
import { getPostFromSlug, getSlugs, type SnippetMeta } from '../../lib/mdxApi';
import { serialize } from 'next-mdx-remote/serialize';
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote';
import { iconMap } from '../../fixtures/snippets';
import rehypeHighlight from 'rehype-highlight';

type CodeSnippetProps = {
	post: {
		source: MDXRemoteSerializeResult<Record<string, unknown>>;
		meta: SnippetMeta;
	};
};

const CodeSnippet: NextPage<CodeSnippetProps> = ({ post }) => {
	return (
		<Layout>
			<article>
				<div className="flex justify-between mb-12">
					<div className="flex flex-col gap-4">
						<h1 className="text-3xl sm:text-5xl font-bold">
							{post.meta.title}
						</h1>
						<p className="text-ui dark:text-ui-dark">
							{post.meta.summary}
						</p>
					</div>
					<div className="p-2 rounded-full bg-gray-100 dark:bg-contrast items-center w-fit h-fit">
						{iconMap[post.meta.icon](48)}
					</div>
				</div>

				<div className="prose prose-code dark:prose-invert min-w-full code-highlight">
					<MDXRemote
						{...post.source}
						components={{
							Copy,
						}}
					></MDXRemote>
				</div>
			</article>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
	const { content, meta } = getPostFromSlug(slug);
	const source = await serialize(content, {
		mdxOptions: { rehypePlugins: [rehypeHighlight] },
	});

	return {
		props: {
			post: { source, meta },
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map(slug => ({ params: { slug } }));
	return {
		paths,
		fallback: false,
	};
};

export default CodeSnippet;
