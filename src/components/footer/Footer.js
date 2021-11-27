import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Instagram, Book, Linkedin, GitHub, Mail } from "react-feather";

import "../../assets/css/styles.css";

function Footer() {
	return (
		<div>
			<Container className="footer" fluid>
				<Row>
					<Col sm={12} md={6}>
						<div className="links">
							<a
								href="https://www.instagram.com/sajal.jpg/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram className="icon ml-0" size={20} />
							</a>

							<a
								href="https://www.goodreads.com/sajal-sharma"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Book className="icon" size={20} />
							</a>

							<a
								href="https://www.linkedin.com/in/sajal-sharma/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="icon" size={20} />
							</a>

							<a
								href="https://github.com/sajal-sharma"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GitHub className="icon" size={20} />
							</a>

							<a
								href="mailto:sharma.sajal@berkeley.edu"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Mail className="icon" size={20} />
							</a>
						</div>
					</Col>

					<Col sm={12} md={6}>
						<p className="copyright">&#169; 2023 Sajal Sharma</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
