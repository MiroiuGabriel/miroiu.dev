import { NowPlaying } from '../now-playing';
import { FooterLink } from './FooterLink';
import config from '../../fixtures/footer.json';

export const Footer = () => {
	return (
		<footer className="mb-8 mt-12">
			<div className="w-full h-px bg-contrast mb-8" />
			<NowPlaying />
			<div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-3 mb-16">
				<div className="flex flex-col items-start space-y-4">
					<FooterLink href="/">Home</FooterLink>
					<FooterLink href="/snippets">Snippets</FooterLink>
				</div>

				<div className="flex flex-col items-start space-y-4">
					<FooterLink href={config.linkedIn} isExternal>
						LinkedIn
					</FooterLink>
					<FooterLink href={config.resume} isExternal>
						Resume
					</FooterLink>
				</div>

				<div className="flex flex-col items-start space-y-4">
					<FooterLink href={config.spotify} isExternal>
						Spotify
					</FooterLink>
					<FooterLink href={config.github} isExternal>
						Github
					</FooterLink>
				</div>
			</div>
		</footer>
	);
};
