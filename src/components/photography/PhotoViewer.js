import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "react-feather";

import responsiveImage, { VIEWER_SIZES, VIEWER_WIDTHS } from "./responsiveImage";

import "../../assets/css/photos.css";

// Full-screen view of one photo. Arrow keys step through the set, Escape closes,
// and focus returns to whatever opened the viewer.
function PhotoViewer({ photos, index, onChange, onClose }) {
	const closeRef = useRef(null);
	const photo = photos[index];

	const step = (offset) => onChange((index + offset + photos.length) % photos.length);

	useEffect(() => {
		const opener = document.activeElement;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeRef.current.focus();

		return () => {
			document.body.style.overflow = previousOverflow;
			if (opener && opener.focus) {
				opener.focus();
			}
		};
	}, []);

	useEffect(() => {
		const handleKey = (event) => {
			if (event.key === "Escape") {
				onClose();
			} else if (event.key === "ArrowLeft") {
				onChange((index - 1 + photos.length) % photos.length);
			} else if (event.key === "ArrowRight") {
				onChange((index + 1) % photos.length);
			}
		};

		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [index, photos.length, onChange, onClose]);

	return (
		<div className="viewer" role="dialog" aria-modal="true" aria-label={photo.caption}>
			<div className="viewer-top">
				<button
					ref={closeRef}
					type="button"
					className="viewer-control"
					aria-label="Close photo"
					onClick={onClose}
				>
					<X size={28} aria-hidden="true" />
				</button>
			</div>

			<button
				type="button"
				className="viewer-control"
				aria-label="Previous photo"
				onClick={() => step(-1)}
			>
				<ChevronLeft size={28} aria-hidden="true" />
			</button>

			<figure className="viewer-figure">
				<img {...responsiveImage(photo.src, VIEWER_WIDTHS, VIEWER_SIZES)} alt={photo.caption} />
				<figcaption className="viewer-caption">{photo.caption}</figcaption>
			</figure>

			<button
				type="button"
				className="viewer-control"
				aria-label="Next photo"
				onClick={() => step(1)}
			>
				<ChevronRight size={28} aria-hidden="true" />
			</button>
		</div>
	);
}

export default PhotoViewer;
