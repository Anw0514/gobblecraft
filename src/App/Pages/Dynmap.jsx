import React from 'react'
import { dynamicWidth } from '../../assets/utils';
import { DynmapDiv } from '../AppStyles';

export default function Dynmap({ iw, ih}) {
  return (
		<DynmapDiv>
			<iframe
				title='Dynmap'
				src='http://51.161.71.93:6969/'
				width={dynamicWidth(iw, 'large')}
				height={ih - 100}
			></iframe>
		</DynmapDiv>
	);
}
