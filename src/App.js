import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/landing/Landing";
import Photography from "./components/photography/Photography";
import { PHOTOGRAPHY_PATH } from "./components/photography/PhotographyIntro";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path={PHOTOGRAPHY_PATH} element={<Photography />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
