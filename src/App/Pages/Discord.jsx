import React from 'react'
import { dynamicWidth } from '../../assets/utils';
import { DiscordDiv } from '../AppStyles';

export default function Discord({ iw }) {
  return (
		<DiscordDiv>
			<iframe
				title='Dynmap'
				src='http://51.161.71.93:6969/'
				width={dynamicWidth(iw, 'large')}
				height='500'
			></iframe>
		</DiscordDiv>
	);
}
