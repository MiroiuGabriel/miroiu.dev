import {
	Button,
	Flex,
	Text,
	useColorMode,
	LinkBox,
	Heading,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Layout } from '../components/layout';
import NextLink from 'next/link';

const FourOhFour = () => {
	const { colorMode } = useColorMode();
	return (
		<Layout>
			<Flex
				direction={['column-reverse', 'column-reverse', 'row']}
				alignItems={['', 'center']}
				mb={12}
			>
				<Flex direction="column" mr={[0, 0, 4]} mt={[4, 4, 0]}>
					<Heading
						as="h1"
						fontSize={['2xl', '4xl']}
						fontWeight="bold"
						mb={2}
					>
						Ooops, you&apos;re not supposed to be here!{' '}
					</Heading>
					<Text opacity={0.8}>
						This page is being implemented or it doesn&apos;t exist.
						Either way, you should probably head back.
					</Text>
					<LinkBox>
						<NextLink href="/">
							<Button my={4} w="full">
								Return Home
							</Button>
						</NextLink>
					</LinkBox>
				</Flex>
				<Image
					src={`/404-${colorMode}.svg`}
					width={240}
					height={240}
					alt="page not found"
				/>
			</Flex>
		</Layout>
	);
};

export default FourOhFour;
