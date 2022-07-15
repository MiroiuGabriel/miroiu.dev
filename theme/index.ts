import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
	colors: {
		brand: {
			50: props => mode('gray.500'),
		},
	},
});

export default theme;
