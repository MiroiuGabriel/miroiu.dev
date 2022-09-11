import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { NowPlayingSong } from '../../lib/types';

export const NowPlaying = () => {
	const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);
	return (
		<div className="flex items-center mb-6">
			<FaSpotify size={24} className="text-green-500" />
			<p className="w-full p-2 truncate">
				{data?.isPlaying ? (
					<a href={data?.trackUrl} className="font-semibold">
						{data?.title}
					</a>
				) : (
					<span className="font-semibold">Not Playing</span>
				)}
				<span className="mx-1">-</span>
				<span>{data?.artist ?? 'Spotify'}</span>
			</p>
		</div>
	);
};
