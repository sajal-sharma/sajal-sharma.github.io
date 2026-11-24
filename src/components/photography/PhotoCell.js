import React from "react";

import "../../assets/css/photos.css";

// One photograph filling its frame cell, with the place name beneath.
function PhotoCell({ photo, onOpen }) {
	return (
		<figure className="photo-cell">
			<button
				type="button"
				className="photo-cell__open"
				aria-label={`Open photo of ${photo.caption}`}
				onClick={onOpen}
			>
				<img src={photo.src} alt={photo.caption} loading="lazy" />
			</button>
			<figcaption>{photo.caption}</figcaption>
		</figure>
	);
}

export default PhotoCell;
