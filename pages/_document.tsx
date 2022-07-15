import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, NextScript, Main } from 'next/document';
import theme from '../theme';

const Document = () => {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<ColorModeScript
					initialColorMode={theme.config.useSystemColorMode}
				/>
			</body>
		</Html>
	);
};

export default Document;
