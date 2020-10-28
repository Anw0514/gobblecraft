import React from 'react'
import { NavDiv, NavButton } from '../AppStyles';

export default function Nav({ iw, sp, ih }) {

	const onHome = sp < ih - 20

  return (
		<NavDiv iw={iw} onHome={onHome}>
			<div>
				<NavButton onHome={onHome}>About</NavButton>
				<NavButton onHome={onHome}>Gallery</NavButton>
				<NavButton onHome={onHome}>Discord</NavButton>
				<NavButton onHome={onHome}>Contact</NavButton>
			</div>
		</NavDiv>
	);
}
