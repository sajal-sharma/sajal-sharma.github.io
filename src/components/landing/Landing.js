import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Typist from "react-typist";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";

function Landing() {
	useEffect(() => {
		const headshotOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		const contentOptions = {
			origin: "right",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".headshot", headshotOptions);
		ScrollReveal().reveal(".content", contentOptions);
	}, []);

	return (
		<div>
			<div className="center">
				<Typist
					className="greeting typist"
					startDelay={750}
					avgTypingDelay={80}
					cursor={{ hideWhenDone: true }}
				>
					Hi, I'm Sajal.
				</Typist>

				<p className="intro mt-3">
					I currently work as a backend engineer on the Core Services team at{" "}
					<a
						className="underline"
						href="https://www.apple.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Apple
					</a>
					. In 2021, I graduated from the{" "}
					<a
						className="underline"
						href="https://www.berkeley.edu/"
						target="_blank"
						rel="noopener noreferrer"
					>
						University of California, Berkeley
					</a>
					, where I majored in Computer Science, Economics, and Data Science.
					Although I started programming just a few years ago, I've always been
					in awe of the impact and reach that technology has.
				</p>

				<p className="intro mt-3">
					In addition to systems engineering, I'm interested in financial
					technology and quantitative finance. During the first half of 2022, I
					was a teaching assistant for the{" "}
					<a
						className="underline"
						href="https://bootcamp.berkeley.edu/fintech/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Financial Technology
					</a>{" "}
					course at the UC Berkeley Extension program.
				</p>

				<p className="intro mt-3">
					Outside of work, I enjoy playing basketball with my friends, trying
					new restaurants, and exploring big cities. Over the quarantine, I also
					became interested in reading, biking, and{" "}
					<a
						className="underline"
						href="#/photography"
						rel="noopener noreferrer"
					>
						photography
					</a>
					.
				</p>

				<p className="intro">
					If you'd like to get in touch, feel free to reach out to me at{" "}
					<a
						className="underline"
						href="mailto:sharma.sajal@berkeley.edu"
						target="_blank"
						rel="noopener noreferrer"
					>
						sharma.sajal@berkeley.edu
					</a>
					!
				</p>
			</div>

			<div className="about-bottom">
				<Footer />
			</div>
		</div>
	);
}

export default Landing;

// https://stackoverflow.com/questions/46432533/center-div-between-two-divs-vertically
