import React, { useEffect, useState } from 'react';
import { AppDiv } from './AppStyles';
import { BrowserRouter as Router } from "react-router-dom";

import Home from './Home/Home';
import Nav from './Nav/Nav';
import Discord from './Discord/Discord';

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		const updateWidth = () => {
      setInnerWidth(window.innerWidth)
    }
		window.addEventListener("resize", updateWidth);
		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	});
  
  return (
		<Router>
			<AppDiv>
				<Nav iw={innerWidth} />
				<Home iw={innerWidth} />
				<Discord iw={innerWidth} />
			</AppDiv>
		</Router>
	);
}

export default App;
