import { Box, Container } from '@chakra-ui/react';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<Box px={8} w="full">
			<Container maxW={672} m="auto" p={0}>
				<Navbar />
				<Box as="main" id="skip" scrollMarginTop="18px">
					{children}
				</Box>
				<Footer />
			</Container>
		</Box>
	);
};
