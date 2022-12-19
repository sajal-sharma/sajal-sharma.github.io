import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";
import barney_falls from "../../assets/images/barney_falls.jpg";
import engineering_building from "../../assets/images/engineering_building.jpg";
import nike_store from "../../assets/images/nike_store.jpg";
import point_reyes from "../../assets/images/point_reyes.jpg";
import redwood_trees from "../../assets/images/redwood_trees.jpg";
import snoqualmire_falls from "../../assets/images/snoqualmire_falls.jpg";
import soda_hall from "../../assets/images/soda_hall.jpg";
import south_hall from "../../assets/images/south_hall.jpg";
import clouds from "../../assets/images/clouds.jpg";
import mountain_view from "../../assets/images/mountain_view.jpg";
import santa_cruz from "../../assets/images/santa_cruz.jpg";
import shoreline_park from "../../assets/images/shoreline_park.jpg";
import galaries_lafayette from "../../assets/images/galaries_lafayette.jpg";
import palais_princier from "../../assets/images/palais_princier.jpg";
import musee_oceanographique from "../../assets/images/musee_oceanographique.jpg";
import berkeley_northside from "../../assets/images/berkeley_northside.jpg";
import acropolis from "../../assets/images/acropolis.jpg";
import theater_of_dionysus from "../../assets/images/theater_of_dionysus.jpg";

function Photography() {
	useEffect(() => {
		const entryOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".entry", entryOptions);
	}, []);

	return (
		<div className="center-photography">
			<Row className="mt-5">
				<div className="entry">
					<Col>
						<p className="back-paragraph mb-1">
							<a className="back-button" href="#/" rel="noopener noreferrer">
								&lt;Home
							</a>
						</p>

						<p className="header">Photography</p>
					</Col>

					<Col>
						<p className="intro">
							Over the past few years, I developed an strong interest in
							photography. Here are some of my favorite photos I've taken! For
							more, you can visit my{" "}
							<a
								className="underline"
								href="https://www.instagram.com/sajal.jpg/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
							.
						</p>
					</Col>
				</div>

				<Row className="ml-0 mr-0">
					<Col className="mt-2 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Mountain View, California"
							src={mountain_view}
						></img>
						<span className="location">Mountain View, California</span>
					</Col>

					<Col className="mt-2 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Palais Princier de Monaco"
							src={palais_princier}
						></img>
						<span className="location">
							Palais Princier de Monaco - Monaco-Ville, Monaco
						</span>
					</Col>

					<Col className="mt-2 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Santa Cruz, California"
							src={santa_cruz}
						></img>
						<span className="location">
							Santa Cruz Beach Boardwalk - Santa Cruz, California
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Galeries Lafayette Paris Haussmann"
							src={galaries_lafayette}
						></img>
						<span className="location">
							Galeries Lafayette Paris Haussmann - Paris, France
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Mountain View, California"
							src={shoreline_park}
						></img>
						<span className="location">
							Shoreline Park - Mountain View, California
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Musée Océanographique de Monaco"
							src={musee_oceanographique}
						></img>
						<span className="location">
							Musée Océanographique de Monaco - Monaco-Ville, Monaco
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Berkeley, California"
							src={south_hall}
						></img>
						<span className="location">UC Berkeley - Berkeley, California</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Snoqualmie, Washington"
							src={snoqualmire_falls}
						></img>
						<span className="location">
							Snoqualmie Falls - Snoqualmie, Washington
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Berkeley, California"
							src={engineering_building}
						></img>
						<span className="location">UC Berkeley - Berkeley, California</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Haleakalā, Hawaii"
							src={acropolis}
						></img>
						<span className="location">
							Acropolis of Athens - Athens, Greece
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Haleakalā, Hawaii"
							src={berkeley_northside}
						></img>
						<span className="location">UC Berkeley - Berkeley, CA</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Haleakalā, Hawaii"
							src={theater_of_dionysus}
						></img>
						<span className="location">
							Theater of Dionysus - Athens, Greece
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img className="image" alt="California" src={barney_falls}></img>
						<span className="location">Burney Falls - California</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Berkeley, California"
							src={soda_hall}
						></img>
						<span className="location">UC Berkeley - Berkeley, California</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img className="image" alt="Haleakalā, Hawaii" src={clouds}></img>
						<span className="location">
							Haleakalā National Park - Haleakalā, Hawaii
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Seattle, Washington"
							src={nike_store}
						></img>
						<span className="location">Nike Seattle - Seattle, Washington</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img
							className="image"
							alt="Inverness, California"
							src={point_reyes}
						></img>
						<span className="location">
							Point Reyes Lighthouse - Inverness, California
						</span>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6} lg={4}>
						<img className="image" alt="California" src={redwood_trees}></img>
						<span className="location">
							Redwood National and State Park - California
						</span>
					</Col>
				</Row>
			</Row>

			<Footer />
		</div>
	);
}

export default Photography;
