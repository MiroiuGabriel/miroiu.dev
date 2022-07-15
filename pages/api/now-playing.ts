import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify';
import { NowPlayingSong } from '../../lib/types';

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<NowPlayingSong>
) => {
	const response = await getNowPlaying();

	if (response.status === 204 || response.status > 400) {
		res.status(200).json({ isPlaying: false });
		return;
	}

	const track = await response.json();

	if (track.item === null) res.status(200).json({ isPlaying: false });

	const isPlaying = track.is_playing;
	const title = track.item.name;
	const trackUrl = track.item.external_urls.spotify;
	const artist = track.item.artists
		.map((_artist: any) => _artist.name)
		.join(', ');

	res.status(200)
		.setHeader(
			'cache-control',
			'public, s-maxage=60, stale-while-revalidate=30'
		)
		.json({ isPlaying, title, trackUrl, artist });
};

export default handler;
