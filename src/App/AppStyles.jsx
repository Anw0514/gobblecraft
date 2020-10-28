import styled from 'styled-components';
import { dynamicPadding } from '../assets/utils';

export const AppDiv = styled.div`
	background-color: #e5e1e6;
	min-height: 100vh;
	text-align: center;
`;

// NAV STYLES

export const NavDiv = styled.div`
	position: fixed;
	width: ${({ iw }) => iw - 40 + "px"};
	padding: 20px;
	text-align: right;
	text-transform: uppercase;
	color: ${({ onHome }) => onHome ? 'white' : '#861f41'};
	z-index: 100;
`;

export const NavButton = styled.a`
  width: 80px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
	position: relative;
	background: rgba(255, 255, 255, 0);
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
		border-color: ${({ onHome }) => onHome ? 'white' : '#861f41'};
		transition: width 350ms ease-in-out;
		width: 80px;
	}
`;

// HOME STYLES

export const HomeDiv = styled.div`
	height: 100vh;
	background-color: #e5e1e6;
	background-image: url(${({ img }) => img});
	background-size: cover;
	padding-left: ${({ iw }) => dynamicPadding(iw) + "px"};
	padding-right: ${({ iw }) => dynamicPadding(iw) + "px"};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: white;

	h1 {
		font-size: 6rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	h2 {
		margin-top: 0;
		font-style: italic;
	}

	img {
		max-width: 100%;
		margin-bottom: 10px;
	}
`;

export const HomeLink = styled.a`
	color: white;
	text-transform: uppercase;
	text-decoration: none;
	padding: 10px 20px;
	border: 4px solid #861f41 !important;
	display: inline-block;
	transition: all 0.4s ease 0s;

	&:hover {
		background: #861f41;
		border-color: #861f41 !important;
		transition: all 0.4s ease 0s;
	}
`;

export const HomeButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`;

// GALLERY STYLES

export const GalleryDiv = styled.div`
	padding: 4rem ${({ w }) => dynamicPadding(w, "large")}px 6rem;
	color: #861f41;

	h1 {
		margin-top: 0;
	}

	.awssld {
		--organic-arrow-color: #861f41;
		--loader-bar-color: #861f41;
		--organic-arrow-thickness: 6px;
		--control-bullet-color: #e87722;
		--control-bullet-active-color: #c64600;
		--control-button-opacity: 0.8;
		--slider-height-percentage: 55%;
	}
`;

// DISCORD STYLES

export const DiscordDiv = styled.div`
	padding-top: 3rem;
	padding-bottom: 3rem;
`;
