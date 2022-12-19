import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Landing from "./components/landing/Landing";
import Photography from "./components/photography/Photography";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/photography" component={Photography} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
