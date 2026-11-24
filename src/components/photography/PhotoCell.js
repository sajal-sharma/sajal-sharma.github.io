import React from "react";

import responsiveImage, { GRID_SIZES, GRID_WIDTHS } from "./responsiveImage";

import "../../assets/css/photos.css";

// One photograph filling its frame cell, with the place name beneath.
function PhotoCell({ photo, onOpen }) {
	return (
		<figure className="photo-cell">
			<button
				type="button"
				className="photo-cell-open"
				aria-label={`Open photo of ${photo.caption}`}
				onClick={onOpen}
			>
				<img
					{...responsiveImage(photo.src, GRID_WIDTHS, GRID_SIZES)}
					alt={photo.caption}
					loading="lazy"
				/>
			</button>
			<figcaption>{photo.caption}</figcaption>
		</figure>
	);
}

export default PhotoCell;
