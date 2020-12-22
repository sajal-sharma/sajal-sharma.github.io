import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import Banner from "../footer/Banner";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";

function Experience() {
	useEffect(() => {
		const headerOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		const entryOptions = {
			origin: "right",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".header", headerOptions);
		ScrollReveal().reveal(".entry", entryOptions);
	}, []);

	return (
		<div>
			<Navigation />

			<Container fluid>
				<Row className="content-row mt-5">
					<Col sm={12} md={4}>
						<p className="header">Education</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">University of California, Berkeley</p>
							<p className="date">August 2017 - May 2021</p>

							<p className="position mt-3">
								Bachelor of Arts, Computer Science
							</p>
							<p className="bullet">Relevant Coursework:</p>
							<ul className="bullets">
								{/* <li className="bullet">Data Structures (COMPSCI 61B)</li> */}
								<li className="bullet">Computer Architecture (COMPSCI 61C)</li>
								<li className="bullet">
									Discrete Mathematics and Probability Theory (COMPSCI 70)
								</li>
								<li className="bullet">Computer Security (COMPSCI 161)</li>
								<li className="bullet">Operating Systems (COMPSCI 162)</li>
								<li className="bullet">Algorithms (COMPSCI 170)</li>
								<li className="bullet">Database Systems (COMPSCI 186)</li>
							</ul>

							<p className="position mt-3">Bachelor of Arts, Economics</p>
							<p className="bullet">Relevant Coursework:</p>
							<ul className="bullets">
								{/* <li className="bullet">Microeconomic Analysis (ECON 100A)</li> */}
								{/* <li className="bullet">Macroeconomic Theory (ECON 101B)</li> */}
								<li className="bullet">
									Financial and Behavioral Economics (ECON 138)
								</li>
								<li className="bullet">Econometrics (ECON 140)</li>
								{/* <li className="bullet">International Trade (ECON C181)</li> */}
								<li className="bullet">
									International Monetary Economics (ECON 182)
								</li>
								<li className="bullet">Finance (UGBA 103)</li>
								<li className="bullet">Investments (UGBA 133)</li>
							</ul>

							<p className="position mt-3">Bachelor of Arts, Data Science</p>
							<p className="bullet">Relevant Coursework:</p>
							<ul className="bullets">
								<li className="bullet">Multivariable Calculus (MATH 53)</li>
								<li className="bullet">
									Principles and Techniques of Data Science (STAT C100)
								</li>
								<li className="bullet">
									Probability for Data Science (STAT 140)
								</li>
								<li className="bullet">
									Artificial Intelligence (COMPSCI 188)
								</li>
								<li className="bullet">Machine Learning (COMPSCI 189)</li>
							</ul>
						</div>

						{/* <div className="entry">
							<p className="title mt-4">University High School</p>
							<p className="date">September 2013 - June 2017</p>

							<ul className="bullets">
								<li className="bullet">GPA: 4.45</li>
								<li className="bullet">ACT: 35 (out of 36)</li>
								<li className="bullet">
									Activities: Speech and Debate, Volleyball
								</li>
							</ul>
						</div> */}
					</Col>
				</Row>

				<Row className="content-row mt-5">
					<Col sm={12} md={4}>
						<p className="header">Work Experience</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">Apple Inc.</p>
							<p className="date">July 2021 - Present &#xb7; Cupertino, CA</p>
							<p className="position">Software Engineer</p>
							<ul className="bullets">
								<li className="bullet">Apple Media Products, Core Services</li>
							</ul>

							<p className="date mt-4">
								May 2020 - August 2020 &#xb7; Cupertino, CA
							</p>
							<p className="position">Software Development Intern</p>

							<ul className="bullets">
								<li className="bullet">
									Developed a full-stack application to help the Tech Operations
									team manage support tickets, track inventory, and approve
									facility access using a ReactJS and Redux front-end, a
									PostgreSQL database, and a Laravel PHP API
								</li>
								{/* <li className="bullet">
									Created a CRON job in PHP to automate parsing new emails and
									adding their data to the support tickets database
								</li> */}
								<li className="bullet">
									Integrated microservices for authenticating employees,
									managing data, and creating interface components
								</li>
								<li className="bullet">
									Built an NPM package to handle calls and responses between the
									application and the various back-end APIs
								</li>
								<li className="bullet">
									Configured a Jenkins CI/CD pipeline for integration testing
									and used Docker for local development
								</li>
							</ul>
						</div>

						<div className="entry">
							<p className="title mt-4">VMware, Inc.</p>
							<p className="date">
								May 2019 - August 2019 &#xb7; Palo Alto, CA
							</p>
							<p className="position">Product Development Intern</p>

							<ul className="bullets">
								<li className="bullet">
									Worked on the NSX team to develop two full-stack applications
									using Angular, Node.js, Express.js, and REST APIs
								</li>
								<li className="bullet">
									Created an analytics dashboard that improved load balancing
									for Edges and Edge Clusters in an NSX system
								</li>
								{/* <li className="bullet">
									Wrote a Python script to decompress support bundles, extract
									relevant files, and cleanse and reshape data using Pandas
								</li> */}
								<li className="bullet">
									Automated data extraction from system logs and consolidated
									key statistics in a troubleshooting dashboard, reducing the
									time required to model the architecture of each NSX
									configuration from 60 minutes to less than 3 minutes
								</li>
							</ul>
						</div>
					</Col>
				</Row>

				{/* <Row className="content-row mt-5">
					<Col sm={12} md={4}>
						<p className="header">Activities</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">Computer Science Mentors</p>
							<p className="date">January 2019 - May 2021</p>
							<p className="position">Senior Mentor</p>

							<ul className="bullets">
								<li className="bullet">
									Led an adjunct section to help students strengthen their
									understanding of Discrete Mathematics and Probability Theory
								</li>
								<li className="bullet">
									Presented short lectures and guided students through
									problem-based worksheets to help improve their performance
								</li>
							</ul>
						</div>

						<div className="entry">
							<p className="title mt-4">Upsilon Pi Epsilon: Nu Chapter</p>
							<p className="date">May 2019 - May 2020</p>
							<p className="position">Industrial Relations Officer</p>

							<ul className="bullets">
								<li className="bullet">
									Secured corporate partners, organized company info-sessions,
									and hosted guest speakers for Computer Science students
								</li>
							</ul>
						</div>

						<div className="entry">
							<p className="title mt-4">RoboBears</p>
							<p className="date">July 2018 - May 2020</p>
							<p className="position">Web Developer</p>

							<ul className="bullets">
								<li className="bullet">
									Redesigned the website to simplify navigation and better
									organize content, including recruitment, projects, and events
								</li>
							</ul>
						</div>
					</Col>
				</Row> */}

				<Row className="content-row mt-5">
					<Col sm={12} md={4}>
						<p className="header">Skills</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">Programming Languages</p>
							<Row>
								<Col sm={12} md={6}>
									<ul className="bullets">
										<li className="bullet">Java</li>
										<li className="bullet">Python</li>
										<li className="bullet">JavaScript/TypeScript</li>
										<li className="bullet">C</li>
									</ul>
								</Col>

								<Col xs={12} md={6}>
									<ul className="bullets">
										<li className="bullet">HTML/CSS</li>
										<li className="bullet">Go</li>
										<li className="bullet">SQL</li>
									</ul>
								</Col>
							</Row>
						</div>

						<div className="entry">
							<p className="title mt-4">Libraries and Frameworks</p>
							<Row>
								<Col sm={12} md={6}>
									<ul className="bullets">
										<li className="bullet">ReactJS</li>
										<li className="bullet">Angular</li>
										<li className="bullet">Redux</li>
									</ul>
								</Col>

								<Col xs={12} md={6}>
									<ul className="bullets">
										<li className="bullet">Node.js/Express.js</li>
										<li className="bullet">Bootstrap</li>
										<li className="bullet">NumPy/Pandas</li>
									</ul>
								</Col>
							</Row>
						</div>

						<div className="entry">
							<p className="title mt-4">Platforms and Services</p>
							<ul className="bullets">
								<li className="bullet">Git/GitHub</li>
								<li className="bullet">Docker</li>
								<li className="bullet">Jenkins CI/CD</li>
							</ul>
						</div>
					</Col>
				</Row>

				<Row className="content-row mt-5">
					<Col sm={12} md={4}>
						<p className="header">Honors</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">Best Web Application</p>
							<p className="date">October 2017 &#xb7; Cal Hacks</p>
							<p className="description">
								Awarded to the team that develops the best application for web
								browsers determined by the judges
							</p>
						</div>

						<div className="entry">
							<p className="title mt-4">Cal Hacks Finalist</p>
							<p className="date">October 2017 &#xb7; Cal Hacks</p>
							<p className="description">
								Six finalists were hand-selected by judges for the development
								and potential of their projects from a pool of 216 entries
							</p>
						</div>

						<div className="entry">
							<p className="title mt-4">National AP Scholar</p>
							<p className="date">August 2017 &#xb7; College Board</p>
							<p className="description">
								Granted to students who receive an average of 4 or higher on all
								AP Exams taken and score 4 or higher on at least eight of these
								exams
							</p>
						</div>

						<div className="entry">
							<p className="title mt-4">Summa Cum Laude</p>
							<p className="date">May 2017 &#xb7; University High School</p>
							<p className="description">
								Given to students with a weighted GPA of 4.40 or higher
							</p>
						</div>

						<div className="entry">
							<p className="title mt-4">Commended National Merit Scholar</p>
							<p className="date">
								March 2017 &#xb7; National Merit Scholarship Corporation
							</p>
							<p className="description">
								Recognizes outstanding academic promise on the basis of a
								nationally applied Selection Index score achieved on the PSAT
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<Banner />
			<Footer />
		</div>
	);
}

export default Experience;
