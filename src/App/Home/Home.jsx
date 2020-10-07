import React from 'react'
import { HomeDiv, HomeButtons, HomeLink } from './HomeStyles';

// ??? Should discord link go to discord section or 'join server' ?

export default function Home({ iw }) {
  const gobbleImage = require("../../assets/images/gobblecraft.png");
  return (
		<HomeDiv iw={iw} img={require('../../assets/images/spawn_trees.png')}>
      { gobbleImage ? 
        <img src={gobbleImage} alt='GobbleCraft' />
      : <h1>GobbleCraft</h1> }
			<h2>The Official Virginia Tech Minecraft Server</h2>
			<HomeButtons>
				<HomeLink href='https://map.blockeley.com/'>Dynmap</HomeLink>
				<HomeLink href='google.com'>Discord</HomeLink>
			</HomeButtons>
		</HomeDiv>
	);
}
