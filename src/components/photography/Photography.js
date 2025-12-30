import React from "react";
import Navigation from "../navigation/Navigation";
import { Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

import "../../assets/css/common.css";
import "../../assets/css/photography.css";
import mountain_view from "../../assets/images/mountain_view.jpg";
import palais_princier from "../../assets/images/palais_princier.jpg";

function Photography() {
	const navigate = useNavigate();

	const handleGalleryClick = (galleryPath) => {
		navigate(galleryPath);
	};

	return (
		<div className="page-container">
			<div className="content-container">
				<Row className="mt-5">
					<div>
						<Col>
							<p className="header">Photography</p>
						</Col>

						<Col>
							<p className="intro mt-3">
								Over the years, I've developed an interest in photography.
								Here are some of my favorite photos I've taken!
								{/*<a*/}
								{/*	className="underline"*/}
								{/*	href="https://www.instagram.com/sajal.jpg/"*/}
								{/*	target="_blank"*/}
								{/*	rel="noopener noreferrer"*/}
								{/*>*/}
								{/*	Instagram*/}
								{/*</a>*/}
								{/*.*/}
							</p>
						</Col>
					</div>

					<Row className="ml-0 mr-0">
						<Col className="mt-2 pl-2 pr-2" sm={12} md={6}>
							<div
								className="gallery-cover"
								onClick={() => handleGalleryClick('/photography/europe')}
							>
								<img
									className="gallery-cover-image"
									alt="Europe Gallery"
									src={palais_princier}
								/>
								<div className="gallery-overlay">
									<h2 className="gallery-title">Landscapes</h2>
								</div>
							</div>
						</Col>

						<Col className="mt-2 pl-2 pr-2" sm={12} md={6}>
							<div
								className="gallery-cover"
								onClick={() => handleGalleryClick('/photography/europe')}
							>
								<img
									className="gallery-cover-image"
									alt="Europe Gallery"
									src={palais_princier}
								/>
								<div className="gallery-overlay">
									<h2 className="gallery-title">Cityscapes</h2>
								</div>
							</div>
						</Col>
					</Row>

					<Row className="ml-0 mr-0">
						<Col className="mt-2 pl-2 pr-2" sm={12} md={6}>
							<div
								className="gallery-cover"
								onClick={() => handleGalleryClick('/photography/europe')}
							>
								<img
									className="gallery-cover-image"
									alt="Europe Gallery"
									src={palais_princier}
								/>
								<div className="gallery-overlay">
									<h2 className="gallery-title">Street Photography</h2>
								</div>
							</div>
						</Col>

						<Col className="mt-2 pl-2 pr-2" sm={12} md={6}>
							<div
								className="gallery-cover"
								onClick={() => handleGalleryClick('/photography/portraits')}
							>
								<img
									className="gallery-cover-image"
									alt="USA Gallery"
									src={mountain_view}
								/>
								<div className="gallery-overlay">
									<h2 className="gallery-title">Portraits</h2>
								</div>
							</div>
						</Col>
					</Row>
				</Row>
			</div>

			<div className="footer-container">
				<Footer />
			</div>
		</div>
	);
}

export default Photography;
