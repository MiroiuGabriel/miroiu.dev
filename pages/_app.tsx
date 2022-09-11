import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />{' '}
		</ThemeProvider>
	);
};

export default MyApp;
