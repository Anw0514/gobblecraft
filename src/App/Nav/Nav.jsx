import React from 'react'
import { NavDiv, NavButton } from './NavStyles';

export default function Nav({ iw }) {
  return (
		<NavDiv iw={iw}>
			<div>
				<NavButton>About</NavButton>
				<NavButton>Discord</NavButton>
				<NavButton>Dynmap</NavButton>
				<NavButton>Contact</NavButton>
			</div>
		</NavDiv>
	);
}
