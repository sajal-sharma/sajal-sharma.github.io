import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import Typist from "react-typist";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";
import picture from "../../assets/images/headshot2.jpg";

function About() {
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
			<Navigation />

			<Container fluid className="center">
				<Row className="content-row">
					<Col sm={12} md={6} className="mobile-padding">
						<div className="center">
							<img className="headshot" alt="Sajal Sharma" src={picture}></img>
						</div>
					</Col>

					<Col sm={12} md={6} className="right mobile-padding">
						<div className="content center">
							<Typist
								className="greeting typist"
								startDelay={750}
								avgTypingDelay={80}
								cursor={{ hideWhenDone: true }}
							>
								Hi, I'm Sajal.
							</Typist>

							<p className="intro mt-3">
								I recently graduated from the{" "}
								<a
									className="underline"
									href="https://www.berkeley.edu/"
									target="_blank"
									rel="noopener noreferrer"
								>
									University of California, Berkeley
								</a>
								, where I studied Computer Science, Economics, and Data Science.
								Although I started programming just a few years ago, I've always
								been in awe of the power and impact of technology. I'm currently
								working at{" "}
								<a
									className="underline"
									href="https://www.apple.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Apple
								</a>{" "}
								as a backend Software Engineer on the Core Services team. In
								addition to systems engineering, I'm interested in financial
								technology and quantitative finance.
							</p>

							{/* <p className="intro">
								Always seeking to learn new skills and explore my interests, I'm
								constantly working on projects both in and out of class. While I
								was on campus, I was a member of a few student organizations
								including Upsilon Pi Epsilon, Computer Science Mentors, and
								RoboBears.
							</p> */}

							<p className="intro">
								Outside of work, I enjoy playing basketball with my friends,
								trying out new foods, and exploring cities. Over the quarantine,
								I became interested in photography, reading, and biking.
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

							{/* <p className="intro mb-0">
								Currently reading: <span className="underline">Apartment</span>{" "}
								by Teddy Wayne,{" "}
								<span className="underline">Invisible Women</span> by Caroline
								Criado Perez
							</p> */}
						</div>
					</Col>
				</Row>
			</Container>

			<div className="about-bottom">
				<Footer />
			</div>
		</div>
	);
}

export default About;

// https://stackoverflow.com/questions/46432533/center-div-between-two-divs-vertically
