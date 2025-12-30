import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Landing from "./components/landing/Landing";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
