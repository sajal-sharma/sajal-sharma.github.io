import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader, X } from "react-feather";

import responsiveImage, { VIEWER_SIZES, VIEWER_WIDTHS } from "./responsiveImage";

import "../../assets/css/photos.css";

// Full-screen view of one photo. Arrow keys step through the set, Escape closes,
// and focus returns to whatever opened the viewer. A spinner shows until each photo has loaded.
function PhotoViewer({ photos, index, onChange, onClose }) {
	const closeRef = useRef(null);
	const photo = photos[index];
	const [loadedSrc, setLoadedSrc] = useState(null);
	const isLoading = loadedSrc !== photo.src;
	const markLoaded = () => setLoadedSrc(photo.src);

	// A photo already in the browser cache can finish before React attaches onLoad, so check on mount.
	const imageRef = (img) => {
		if (img && img.complete && img.naturalWidth > 0 && loadedSrc !== photo.src) {
			setLoadedSrc(photo.src);
		}
	};

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
				{isLoading && (
					<div className="viewer-spinner" role="status" aria-label="Loading photo">
						<Loader size={28} aria-hidden="true" />
					</div>
				)}
				<img
					key={photo.src}
					ref={imageRef}
					{...responsiveImage(photo.src, VIEWER_WIDTHS, VIEWER_SIZES)}
					alt={photo.caption}
					className={isLoading ? "viewer-image is-loading" : "viewer-image"}
					onLoad={markLoaded}
					onError={markLoaded}
				/>
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
