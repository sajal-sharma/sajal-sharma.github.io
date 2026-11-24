// Builds src/srcSet/sizes for a photo. On Vercel the photos are resized and converted on the fly by
// Vercel Image Optimization (the /_vercel/image endpoint), so the browser downloads only the width it
// needs while the full-quality originals stay untouched in the repo. Everywhere else (the dev server,
// tests, a plain `npm run build`) the original file is used as-is.
//
// The Vercel build sets REACT_APP_VERCEL_IMAGES=true (see vercel.json). Every width and the quality
// used here must also be listed under "images" in vercel.json, or the endpoint rejects the request.

export const QUALITY = 80;

// Grid cells are at most ~460px wide on desktop and full width on phones; 2x for sharp screens.
export const GRID_WIDTHS = [640, 960, 1280];
export const GRID_SIZES = "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw";

// The full-screen viewer can fill a large, high-density display.
export const VIEWER_WIDTHS = [1280, 1920, 2560, 3840];
export const VIEWER_SIZES = "100vw";

const isEnabled = () => process.env.REACT_APP_VERCEL_IMAGES === "true";

export const optimizedUrl = (src, width) =>
	`/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${QUALITY}`;

function responsiveImage(src, widths, sizes) {
	if (!isEnabled()) {
		return { src };
	}

	return {
		src: optimizedUrl(src, widths[widths.length - 1]),
		srcSet: widths.map((width) => `${optimizedUrl(src, width)} ${width}w`).join(", "),
		sizes,
	};
}

export default responsiveImage;
