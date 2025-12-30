import React from "react";
import Footer from "../footer/Footer";

import "../../assets/css/common.css";
import "../../assets/css/landing.css";

function Landing() {
	return (
		<div className="page-container">
			<div className="content-container">
				<p className="greeting mt-5 mt-md-0">
					Hi, I'm Sajal.
				</p>

				<p className="intro mt-2">
					I'm a Senior Software Engineer on the Services Engineering team at Apple. I graduated
					from the University of California, Berkeley in 2021 with a triple major in Computer
					Science, Economics, and Data Science.
				</p>

				<p className="intro mt-2">
					Beyond systems engineering, I'm passionate about financial technology and quantitative finance.
					For the first half of 2022, I served as a teaching assistant for the Financial Technology course
					at the UC Berkeley Extension program.
				</p>

				<p className="intro mt-2">
					Since graduating, I've learned how to ski, convinced myself running long distances is actually fun,
					and rediscovered reading after a long break. I recently bought an espresso machine to experiment
					with different recipes at home, but I still enjoy exploring local coffee shops. Most of all, I love
					traveling the world, discovering new foods, and capturing it all with my camera.
				</p>

				<p className="intro mt-2">
					If you'd like to get in touch, feel free to reach out to me at{" "}
					<a
						className="underline"
						href="mailto:sajal16.sharma@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						sajal16.sharma@gmail.com
					</a>
					!
				</p>
			</div>

			<div className="footer-container">
				<Footer />
			</div>
		</div>
	);
}

export default Landing;

// https://stackoverflow.com/questions/46432533/center-div-between-two-divs-vertically
