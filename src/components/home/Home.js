import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import "../../assets/css/styles.css";

function Home() {
	return (
		<div>
			<Navigation />

			<Container fluid className="center scrolling-div">
				<Marquee loop={0} speed={40} gradient={false}>
					<p className="scrolling-text">Photography</p>
					<p className="scrolling-text">Reading</p>
					<p className="scrolling-text">Hiking</p>
					<p className="scrolling-text">Finance</p>
					<p className="scrolling-text">Coding</p>
					<p className="scrolling-text">Teaching</p>
				</Marquee>
			</Container>

			<Container fluid className="center restrict-text">
				<p className="main-text">Hello, world! I'm Sajal!</p>
				<p className="sub-text mt-3">
					Welcome to my website! You can find more information about me on the
					About page or check out a PDF copy of my resume below.
				</p>
			</Container>

			<div className="bottom">
				<Footer />
			</div>
		</div>
	);
}

export default Home;
