import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
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

function Photography() {
	useEffect(() => {
		const headerOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".header", headerOptions);
	}, []);

	return (
		<div>
			<Navigation></Navigation>

			<Container fluid>
				<Row className="content-row mt-5">
					<Col sm={12}>
						<p className="header">Photography</p>
					</Col>

					<Col sm={12}>
						<p className="intro">
							I recently became interested in photography. Here are some of my
							favorite photos I've taken! For more, you can visit my{" "}
							<a
								className="underline"
								href="https://www.instagram.com/sightswithsaj/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
							.
						</p>
					</Col>

					<Row>
						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Mountain View, California"
								src={mountain_view}
							></img>
							<span className="location">Mountain View, California</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Santa Cruz, California"
								src={santa_cruz}
							></img>
							<span className="location">
								Santa Cruz Beach Boardwalk - Santa Cruz, California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Mountain View, California"
								src={shoreline_park}
							></img>
							<span className="location">
								Shoreline Park - Mountain View, California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Berkeley, California"
								src={south_hall}
							></img>
							<span className="location">
								UC Berkeley - Berkeley, California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Snoqualmie, Washington"
								src={snoqualmire_falls}
							></img>
							<span className="location">
								Snoqualmie Falls - Snoqualmie, Washington
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Berkeley, California"
								src={engineering_building}
							></img>
							<span className="location">
								UC Berkeley - Berkeley, California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Seattle, Washington"
								src={nike_store}
							></img>
							<span className="location">
								Nike Seattle - Seattle, Washington
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Inverness, California"
								src={point_reyes}
							></img>
							<span className="location">
								Point Reyes Lighthouse - Inverness, California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img className="image" alt="California" src={redwood_trees}></img>
							<span className="location">
								Redwood National and State Park - California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img className="image" alt="California" src={barney_falls}></img>
							<span className="location">Burney Falls - California</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Berkeley, California"
								src={soda_hall}
							></img>
							<span className="location">
								UC Berkeley - Berkeley, California
							</span>
						</Col>

						<Col className="mt-3" sm={12} md={6} lg={4}>
							<img
								className="image"
								alt="Haleakal&#257;, Hawaii"
								src={clouds}
							></img>
							<span className="location">
								Haleakal&#257; National Park - Haleakal&#257;, Hawaii
							</span>
						</Col>
					</Row>
				</Row>
			</Container>

			<Footer />
		</div>
	);
}

export default Photography;
