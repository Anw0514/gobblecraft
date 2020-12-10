import React from 'react'
import { useScrollSection } from "react-scroll-section";

import { NavDiv, NavButton, NavLogoImg } from '../AppStyles';

export default function Nav({ iw, sp, ih }) {
	const aboutSection = useScrollSection('About');
	const gallerySection = useScrollSection('Gallery');
	const dynmapSection = useScrollSection('Dynmap');
	const contactSection = useScrollSection('Contact');
	const onHome = sp < ih - 20

  return (
		<NavDiv iw={iw} onHome={onHome}>
			{iw > 600 ? <NavLogoImg src={require(`../../assets/images/gobblecraft2.png`)}/> : null}
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
					onClick={dynmapSection.onClick}
					selected={dynmapSection.selected}
					onHome={onHome}
				>
					Dynmap
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
