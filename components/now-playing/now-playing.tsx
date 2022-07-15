import { HStack, Icon, Text, Link } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { NowPlayingSong } from '../../lib/types';

export const NowPlaying = () => {
	const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);
	return (
		<HStack mb={6} spacing={0}>
			<Icon as={FaSpotify} color="green.400" boxSize={6} />
			<Text w="full" noOfLines={1} p={2}>
				{data?.isPlaying ? (
					<Link
						href={data?.trackUrl}
						isExternal
						fontWeight="semibold"
						borderRadius={4}
					>
						{data?.title}
					</Link>
				) : (
					<Text as="span" fontWeight="semibold">
						Not Playing
					</Text>
				)}
				<Text as="span" mx={2} opacity={0.8}>
					-
				</Text>
				<Text as="span" opacity={0.8}>
					{data?.artist ?? 'Spotify'}
				</Text>
			</Text>
		</HStack>
	);
};
