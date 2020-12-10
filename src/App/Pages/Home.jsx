import React from 'react'
import { HomeDiv, HomeButtons, HomeLink } from '../AppStyles';

// ??? Should discord link go to discord section or 'join server' ?

export default function Home({ iw }) {
  const gobbleImage = require("../../assets/images/gobblecraft2.png");
  return (
		<HomeDiv iw={iw} img={require('../../assets/images/home_spawn.png')}>
      { gobbleImage ? 
        <img src={gobbleImage} alt='GobbleCraft' />
      : <h1>GobbleCraft</h1> }
			<h2>The Official Virginia Tech Minecraft Server</h2>
			<HomeButtons>
				<HomeLink href='http://51.161.71.93:6969/'>Dynmap</HomeLink>
				<HomeLink href='https://discord.gg/w6p4NcabKc'>Discord</HomeLink>
			</HomeButtons>
		</HomeDiv>
	);
}
