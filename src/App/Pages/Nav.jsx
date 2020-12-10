import React from 'react'
import { useScrollSection } from "react-scroll-section";

import { NavDiv, NavButton } from '../AppStyles';

export default function Nav({ iw, sp, ih }) {
	const aboutSection = useScrollSection('About');
	const gallerySection = useScrollSection('Gallery');
	const discordSection = useScrollSection('Discord');
	const contactSection = useScrollSection('Contact');
	const onHome = sp < ih - 20

  return (
		<NavDiv iw={iw} onHome={onHome}>
			<div>
				<NavButton
					onClick={aboutSection.onClick}
					selected={aboutSection.selected}
					onHome={onHome}
				>
					About
				</NavButton>
				<NavButton
					onClick={gallerySection.onClick}
					selected={gallerySection.selected}
					onHome={onHome}
				>
					Gallery
				</NavButton>
				<NavButton
					onClick={discordSection.onClick}
					selected={discordSection.selected}
					onHome={onHome}
				>
					Discord
				</NavButton>
				<NavButton
					onClick={contactSection.onClick}
					selected={contactSection.selected}
					onHome={onHome}
				>
					Contact
				</NavButton>
			</div>
		</NavDiv>
	);
}
