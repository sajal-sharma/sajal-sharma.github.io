import React from "react";

import Footer from "../footer/Footer";
import PhotographyIntro from "../photography/PhotographyIntro";
import { EMAIL } from "../../content/links";

import "../../assets/css/common.css";
import "../../assets/css/landing.css";

// Every sentence on the page is the owner's own copy.
function Landing() {
	return (
		<div className="frame">
			<header className="hero">
				<h1 className="hero__name">Hi, I'm Sajal.</h1>
				<div className="hero__text">
					<p>
						I'm a software engineer on the Wallets, Payments, and Commerce team at Apple. I
						graduated from the University of California, Berkeley in 2021 with a triple major
						in Computer Science, Economics, and Data Science.
					</p>
					<p>
						Beyond systems engineering, I'm interested in financial technology and
						quantitative finance. For the first half of 2022, I served as a teaching assistant
						for the Financial Technology course at the UC Berkeley Extension program.
					</p>
					<p>
						Since graduating, I've learned how to ski, run a few half and full marathons, and
						rediscovered reading after a long break. I like experimenting with my espresso
						machine at home, but I still have fun exploring local coffee shops. Most of all, I
						enjoy traveling the world, trying new foods, and capturing it all with my camera.
					</p>
					<p>If you'd like to get in touch, feel free to reach out to me at {EMAIL}!</p>
				</div>
			</header>

			<section aria-labelledby="photography-heading">
				<PhotographyIntro linkToGallery />
			</section>

			<Footer />
		</div>
	);
}

export default Landing;
