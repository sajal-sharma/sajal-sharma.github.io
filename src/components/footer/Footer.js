import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedinIn,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPortrait } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/styles.css";

import resume from "../../assets/Sajal_Sharma_Resume.pdf";

function Footer() {
	return (
		<div>
			<Container className="footer" fluid>
				<Row className="content-row">
					<Col sm={12} md={6}>
						<div className="links">
							<a
								href="https://www.facebook.com/ssajjall/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="icon" icon={faFacebook} />
							</a>

							<a
								href="https://www.instagram.com/sightswithsaj/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="icon" icon={faInstagram} />
							</a>

							<a
								href="https://www.linkedin.com/in/sajal-sharma/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="icon" icon={faLinkedinIn} />
							</a>

							<a
								href="https://github.com/sajal-sharma"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="icon" icon={faGithub} />
							</a>

							<a
								href="mailto:sharma.sajal@berkeley.edu"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon className="icon" icon={faEnvelope} />
							</a>

							<a href={resume} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon className="icon" icon={faPortrait} />
							</a>
						</div>
					</Col>

					<Col sm={12} md={6}>
						<p className="copyright">&#169; 2021 Sajal Sharma</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
