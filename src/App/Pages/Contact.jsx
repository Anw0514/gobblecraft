import React from 'react'
import { ContactDiv } from '../AppStyles';
import { dynamicWidth } from '../../assets/utils';

export default function Contact({ iw }) {
  const width = dynamicWidth(iw, "large") / 3;
  return (
		<ContactDiv iw={iw}>
			<iframe
				title='Discord'
				src='https://discordapp.com/widget?id=597211827037929472&theme=dark'
				width={width}
				height='500'
				allowtransparency='true'
				frameBorder='0'
				sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
			></iframe>
			<div>
				<h1>Contact</h1>
        <p>For inquiries contact our President, David Cho</p>
			</div>
		</ContactDiv>
	);
}
