import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import { Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import { X } from "react-feather";

import "../../assets/css/photography.css";
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

function Europe() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedLocation, setSelectedLocation] = useState("");

	const openEnlargedImage = (imageSrc, location) => {
		setSelectedImage(imageSrc);
		setSelectedLocation(location);
		document.body.style.overflow = 'hidden';
	};

	const closeEnlargedImage = () => {
		setSelectedImage(null);
		setSelectedLocation("");
		document.body.style.overflow = 'unset';
	};

	React.useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				closeEnlargedImage();
			}
		};

		if (selectedImage) {
			document.addEventListener('keydown', handleEscape);
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [selectedImage]);

	return (
		<div className="photography-center">
			<Row className="mt-5">
				<div>
					<Col>
						<p className="header">Europe</p>
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
						<img
							className="image clickable-image"
							alt="Mountain View, California"
							src={mountain_view}
							onClick={() => openEnlargedImage(mountain_view, "Mountain View, California")}
						></img>
						<div className="location mt-1">Mountain View, California</div>
					</Col>

					<Col className="mt-2 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Palais Princier de Monaco - Monaco-Ville, Monaco"
							src={palais_princier}
							onClick={() => openEnlargedImage(palais_princier, "Palais Princier de Monaco - Monaco-Ville, Monaco")}
						></img>
						<div className="location mt-1">
							Palais Princier de Monaco - Monaco-Ville, Monaco
						</div>
					</Col>

					<Col className="mt-2 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Santa Cruz Beach Boardwalk - Santa Cruz, California"
							src={santa_cruz}
							onClick={() => openEnlargedImage(santa_cruz, "Santa Cruz Beach Boardwalk - Santa Cruz, California")}
						></img>
						<div className="location mt-1">
							Santa Cruz Beach Boardwalk - Santa Cruz, California
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Galeries Lafayette Paris Haussmann - Paris, France"
							src={galaries_lafayette}
							onClick={() => openEnlargedImage(galaries_lafayette, "Galeries Lafayette Paris Haussmann - Paris, France")}
						></img>
						<div className="location mt-1">
							Galeries Lafayette Paris Haussmann - Paris, France
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Shoreline Park - Mountain View, California"
							src={shoreline_park}
							onClick={() => openEnlargedImage(shoreline_park, "Shoreline Park - Mountain View, California")}
						></img>
						<div className="location mt-1">
							Shoreline Park - Mountain View, California
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Musée Océanographique de Monaco - Monaco-Ville, Monaco"
							src={musee_oceanographique}
							onClick={() => openEnlargedImage(musee_oceanographique, "Musée Océanographique de Monaco - Monaco-Ville, Monaco")}
						></img>
						<div className="location mt-1">
							Musée Océanographique de Monaco - Monaco-Ville, Monaco
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="UC Berkeley - Berkeley, California"
							src={south_hall}
							onClick={() => openEnlargedImage(south_hall, "UC Berkeley - Berkeley, California")}
						></img>
						<div className="location mt-1">UC Berkeley - Berkeley, California</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Snoqualmie Falls - Snoqualmie, Washingtonn"
							src={snoqualmire_falls}
							onClick={() => openEnlargedImage(snoqualmire_falls, "Snoqualmie Falls - Snoqualmie, Washington")}
						></img>
						<div className="location mt-1">
							Snoqualmie Falls - Snoqualmie, Washington
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="UC Berkeley - Berkeley, California"
							src={engineering_building}
							onClick={() => openEnlargedImage(engineering_building, "UC Berkeley - Berkeley, California")}
						></img>
						<div className="location mt-1">UC Berkeley - Berkeley, California</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Acropolis of Athens - Athens, Greece"
							src={acropolis}
							onClick={() => openEnlargedImage(acropolis, "Acropolis of Athens - Athens, Greece")}
						></img>
						<div className="location mt-1">
							Acropolis of Athens - Athens, Greece
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="UC Berkeley - Berkeley, CA"
							src={berkeley_northside}
							onClick={() => openEnlargedImage(berkeley_northside, "UC Berkeley - Berkeley, CA")}
						></img>
						<div className="location mt-1">UC Berkeley - Berkeley, CA</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Theater of Dionysus - Athens, Greece"
							src={theater_of_dionysus}
							onClick={() => openEnlargedImage(theater_of_dionysus, "Theater of Dionysus - Athens, Greece")}
						></img>
						<div className="location mt-1">
							Theater of Dionysus - Athens, Greece
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Burney Falls - California"
							src={barney_falls}
							onClick={() => openEnlargedImage(barney_falls, "Burney Falls - California")}
						></img>
						<div className="location mt-1">Burney Falls - California</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="UC Berkeley - Berkeley, California"
							src={soda_hall}
							onClick={() => openEnlargedImage(soda_hall, "UC Berkeley - Berkeley, California")}
						></img>
						<div className="location mt-1">UC Berkeley - Berkeley, California</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Haleakalā National Park - Haleakalā, Hawaii"
							src={clouds}
							onClick={() => openEnlargedImage(clouds, "Haleakalā National Park - Haleakalā, Hawaii")}
						></img>
						<div className="location mt-1">
							Haleakalā National Park - Haleakalā, Hawaii
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Nike Seattle - Seattle, Washington"
							src={nike_store}
							onClick={() => openEnlargedImage(nike_store, "Nike Seattle - Seattle, Washington")}
						></img>
						<div className="location mt-1">Nike Seattle - Seattle, Washington</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Point Reyes Lighthouse - Inverness, California"
							src={point_reyes}
							onClick={() => openEnlargedImage(point_reyes, "Point Reyes Lighthouse - Inverness, California")}
						></img>
						<div className="location mt-1">
							Point Reyes Lighthouse - Inverness, California
						</div>
					</Col>

					<Col className="mt-3 pl-2 pr-2" sm={12} md={6}>
						<img
							className="image clickable-image"
							alt="Redwood National and State Park - California"
							src={redwood_trees}
							onClick={() => openEnlargedImage(redwood_trees, "Redwood National and State Park - California")}
						></img>
						<div className="location mt-1">
							Redwood National and State Park - California
						</div>
					</Col>
				</Row>
			</Row>

			{selectedImage && (
				<div className="enlarged-image-overlay">
					<div className="enlarged-image-content" onClick={(e) => e.stopPropagation()}>
						<button
							className="enlarged-image-close-button"
							onClick={closeEnlargedImage}
						>
							<X size={14} />
						</button>
						<img
							src={selectedImage}
							alt={selectedLocation}
							className="enlarged-image"
						/>
						<div className="caption mt-1">
							{selectedLocation}
						</div>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
}

export default Europe;
