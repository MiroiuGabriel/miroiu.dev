import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export type SnippetMeta = {
	slug: string;
	title: string;
	summary: string;
	icon: string;
};

export type Snippet = {
	content: string;
	meta: SnippetMeta;
};

const POSTS_PATH = path.join(process.cwd(), 'snippets');

export const getAllPosts = () => {
	return getSlugs().map(slug => getPostFromSlug(slug));
};

export const getSlugs = (): string[] => {
	const paths = fs.readdirSync(POSTS_PATH);
	return paths.map(path => {
		const [slug, _ext] = path.split('.mdx');
		return slug;
	});
};

export const getPostFromSlug = (slug: string): Snippet => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(postPath).toString();
	const { content, data } = matter(source);

	return {
		content: content,
		meta: {
			title: data.title,
			slug: data.slug,
			summary: data.summary,
			icon: data.icon,
		},
	};
};
