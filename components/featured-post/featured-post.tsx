import { Flex, Icon, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import NextLink from 'next/link';

type FeaturedPostProps = {
	title: string;
	gradient: string;
	slug: string;
};

const interactionEffect = {
	transition: 'transform 0.2s ease-in-out',
	transform: 'translateY(-8px)',
};

//TODO: fix focus ring around featured post

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
	title,
	slug,
	gradient,
}) => {
	const views = '129,420';
	const bg = useColorModeValue('white', 'gray.800');
	return (
		<NextLink passHref href={`/blog/${slug}`}>
			<Link
				_hover={{ textDecoration: 'none' }}
				sx={{ ':focus > div': interactionEffect }}
				_focus={{ boxShadow: 'none' }}
			>
				<Flex
					_hover={interactionEffect}
					p={1}
					bg={gradient}
					borderRadius={10}
					h="full"
					flexDir="column"
					alignContent="space-between"
				>
					<Flex
						direction="column"
						bg={bg}
						borderRadius={8}
						p={4}
						h="full"
					>
						<Text
							mb={8}
							fontWeight="medium"
							fontSize="lg"
							as="h4"
							flexGrow={1}
						>
							{title}
						</Text>
						<Flex alignItems="center">
							<Icon as={MdOutlineRemoveRedEye} boxSize="6" />
							<Text ml={2}>{views}</Text>
						</Flex>
					</Flex>
				</Flex>
			</Link>
		</NextLink>
	);
};
