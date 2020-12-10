import React, { useEffect, useState } from 'react';
import { AppDiv } from './AppStyles';
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollingProvider, Section } from "react-scroll-section";

import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Dynmap from './Pages/Dynmap';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [innerHeight, setInnerHeight] = useState(window.innerHeight);
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);

	useEffect(() => {
		const updateDimmensions = () => {
			setInnerWidth(window.innerWidth);
			setScrollPosition(window.scrollY);
			setInnerHeight(window.innerHeight);
    }
		window.addEventListener("resize", updateDimmensions);
		window.addEventListener("scroll", updateDimmensions);
		return () => {
			window.removeEventListener("resize", updateDimmensions);
			window.removeEventListener("scroll", updateDimmensions);
		};
	});
  
  return (
		<Router>
			<AppDiv>
				<ScrollingProvider>
					<Nav iw={innerWidth} sp={scrollPosition} ih={innerHeight} />
					<Section id='Home'>
						<Home iw={innerWidth} />
					</Section>
					<Section id='Gallery'>
						<Gallery iw={innerWidth} />
					</Section>
					<Section id='Dynmap'>
						<Dynmap iw={innerWidth} />
					</Section>
					<Section id='Contact'>
						<Contact iw={innerWidth} />
					</Section>
				</ScrollingProvider>
			</AppDiv>
		</Router>
	);
}

export default App;
