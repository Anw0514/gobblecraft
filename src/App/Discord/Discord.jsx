import React from 'react'
import { dynamicWidth } from '../../assets/utils';

export default function Discord({ iw }) {
  return (
		<div>
			<iframe
        title='Discord'
				src='https://discordapp.com/widget?id=597211827037929472&theme=dark'
				width={dynamicWidth(iw)}
				height='500'
				allowtransparency='true'
				frameBorder='0'
				sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
			></iframe>
		</div>
	);
}
