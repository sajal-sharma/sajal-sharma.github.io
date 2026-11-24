import React, { useEffect, useState } from "react";

import Footer from "../footer/Footer";
import PhotoCell from "./PhotoCell";
import PhotoViewer from "./PhotoViewer";
import PhotographyIntro from "./PhotographyIntro";
import { PHOTOS } from "../../content/photos";

import "../../assets/css/common.css";
import "../../assets/css/landing.css";

// The photography page: the intro, every photo in a grid, and the full-screen viewer.
function Photography() {
	const [openIndex, setOpenIndex] = useState(null);

	// Arriving from the bottom of the home page, start at the top.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="frame">
			<main aria-labelledby="photography-heading">
				<PhotographyIntro />

				<div className="photo-grid">
					{PHOTOS.map((photo, index) => (
						<PhotoCell key={photo.src} photo={photo} onOpen={() => setOpenIndex(index)} />
					))}
				</div>

				{openIndex !== null && (
					<PhotoViewer
						photos={PHOTOS}
						index={openIndex}
						onChange={setOpenIndex}
						onClose={() => setOpenIndex(null)}
					/>
				)}
			</main>

			<Footer />
		</div>
	);
}

export default Photography;
