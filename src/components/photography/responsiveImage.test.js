import responsiveImage, { GRID_SIZES, GRID_WIDTHS } from "./responsiveImage";

const ORIGINAL = "/static/media/point_reyes.abc123.jpg";

afterEach(() => {
	delete process.env.REACT_APP_VERCEL_IMAGES;
});

test("uses the original photo outside Vercel", () => {
	expect(responsiveImage(ORIGINAL, GRID_WIDTHS, GRID_SIZES)).toEqual({ src: ORIGINAL });
});

test("asks Vercel for each width on Vercel, with the largest as the fallback", () => {
	process.env.REACT_APP_VERCEL_IMAGES = "true";

	const image = responsiveImage(ORIGINAL, GRID_WIDTHS, GRID_SIZES);
	const encoded = encodeURIComponent(ORIGINAL);

	expect(image.src).toBe(`/_vercel/image?url=${encoded}&w=1280&q=80`);
	expect(image.srcSet).toBe(
		[640, 960, 1280].map((w) => `/_vercel/image?url=${encoded}&w=${w}&q=80 ${w}w`).join(", ")
	);
	expect(image.sizes).toBe(GRID_SIZES);
});
