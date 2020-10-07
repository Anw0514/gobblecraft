import styled from "styled-components";
import { dynamicPadding } from '../../assets/utils';

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
