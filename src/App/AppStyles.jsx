import styled from 'styled-components';
import { dynamicPadding, maroon, smoke, burnt, orange, white, stone } from "../assets/utils";

export const AppDiv = styled.div`
	background-color: ${smoke};
	min-height: 100vh;
	text-align: center;
`;

// NAV STYLES
export const NavLogoImg = styled.img`
	position: fixed;
	top: 15px;
	left: 20px;
	width: 200px;



`;

export const NavDiv = styled.div`
	position: fixed;
	width: ${({ iw }) => iw - 40 + "px"};
	padding: 20px;
	text-align: ${({ iw }) => iw > 600 ? `right`: `center` };
	text-transform: uppercase;
	color: ${({ onHome }) => onHome ? 'white' : `black`};
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
		border-color: ${({ onHome }) => onHome ? white : stone};
		transition: width 350ms ease-in-out;
		width: 80px;
	}
`;

// HOME STYLES

export const HomeDiv = styled.div`
	height: 100vh;
	background-color: ${smoke};
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
	border: 4px solid ${maroon} !important;
	display: inline-block;
	transition: all 0.4s ease 0s;

	&:hover {
		background: ${maroon};
		border-color: ${maroon} !important;
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
	padding: 4rem ${({ w }) => dynamicPadding(w)}px 6rem;
	color: ${maroon};

	h1 {
		margin-top: 0;
	}

	.awssld {
		--organic-arrow-color: ${maroon};
		--loader-bar-color: ${maroon};
		--organic-arrow-thickness: 6px;
		--control-bullet-color: ${orange};
		--control-bullet-active-color: ${burnt};
		--control-button-opacity: 0.8;
		--slider-height-percentage: 55%;
	}
`;

// DYNMAP STYLES

export const DynmapDiv = styled.div`
	padding-top: 3rem;
	padding-bottom: 3rem;
`;

// CONTACT STYLES

export const ContactDiv = styled.div`
	background-color: ${burnt};
	color: ${smoke};
	padding: 4rem ${({ iw }) => dynamicPadding(iw, "large")}px 3rem;
	display: flex;
	flex-direction: ${({iw}) => iw > 900 ? `row` : `column`};
	justify-content: space-between;
`;


// TODO by end of day 11/2: 
// - write and add description to gallery images
// - create email for aws and start s3 bucket deployment
// - message David about domain name and aws hosting

// TODO by end of day 11/3:
// - figure out information and styling for contact section
// - add router dom functionality
// - make styling mobile friendly
// - add react-fade-in
// - final touches