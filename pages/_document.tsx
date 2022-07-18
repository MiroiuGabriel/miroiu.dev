import { ColorModeScript } from '@chakra-ui/react';
import Document, {
	Html,
	Head,
	NextScript,
	Main,
	DocumentContext,
} from 'next/document';
import Script from 'next/script';
import theme from '../theme';

import * as React from 'react';

import emotionCache from '../lib/emotion-cache';

import createEmotionServer from '@emotion/server/create-instance';

const { extractCritical } = createEmotionServer(emotionCache);

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = extractCritical(initialProps.html);
		return {
			...initialProps,
			styles: [
				initialProps.styles,
				<style
					key="emotion-css"
					dangerouslySetInnerHTML={{ __html: styles.css }}
					data-emotion-css={styles.ids.join(' ')}
				/>,
			],
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta content="ie=edge" httpEquiv="X-UA-Compatible" />
				</Head>

				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
