import styled from "styled-components";

export const NavDiv = styled.div`
	position: fixed;
	width: ${({ iw }) => iw - 40 + "px"};
	padding: 20px;
	text-align: right;
	text-transform: uppercase;
	color: white;
`;

export const NavButton = styled.a`
  width: 80px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
	position: relative;
	background: rgba(255, 255, 255, 0);
	color: white;
	line-height: 1.4;
	padding: 0.25em;
	text-decoration: none;
  
	&:after,
	&:before {
		backface-visibility: hidden;
		border: 1px solid rgba(255, 255, 255, 0);
		bottom: 0px;
		content: " ";
		display: block;
		margin: 0 auto;
		position: relative;
		transition: all 280ms ease-in-out;
		width: 0;
	}

	&:hover:after,
	&:hover:before {
		backface-visibility: hidden;
		border-color: white;
		transition: width 350ms ease-in-out;
		width: 80px;
	}
`;
