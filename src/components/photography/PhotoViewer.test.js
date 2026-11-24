import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import PhotoViewer from "./PhotoViewer";

const PHOTOS = [
	{ src: "a.jpg", caption: "Point Reyes" },
	{ src: "b.jpg", caption: "Santa Cruz" },
	{ src: "c.jpg", caption: "Snoqualmie Falls" },
];

function Harness({ start }) {
	const [index, setIndex] = useState(start);
	return index === null ? (
		<p>closed</p>
	) : (
		<PhotoViewer photos={PHOTOS} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
	);
}

test("focuses close, steps with buttons and arrow keys, and closes on Escape", () => {
	render(<Harness start={0} />);

	expect(screen.getByRole("button", { name: "Close photo" })).toHaveFocus();
	expect(screen.getByRole("dialog", { name: "Point Reyes" })).toBeInTheDocument();

	fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
	expect(screen.getByRole("dialog", { name: "Santa Cruz" })).toBeInTheDocument();

	fireEvent.keyDown(document, { key: "ArrowLeft" });
	expect(screen.getByRole("dialog", { name: "Point Reyes" })).toBeInTheDocument();

	fireEvent.keyDown(document, { key: "Escape" });
	expect(screen.getByText("closed")).toBeInTheDocument();
});

test("wraps from the last photo back to the first", () => {
	render(<Harness start={2} />);

	fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
	expect(screen.getByRole("dialog", { name: "Point Reyes" })).toBeInTheDocument();
});

test("shows a spinner until each photo loads", () => {
	render(<Harness start={0} />);

	expect(screen.getByRole("status", { name: "Loading photo" })).toBeInTheDocument();
	fireEvent.load(screen.getByRole("img", { name: "Point Reyes" }));
	expect(screen.queryByRole("status", { name: "Loading photo" })).not.toBeInTheDocument();

	fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
	expect(screen.getByRole("status", { name: "Loading photo" })).toBeInTheDocument();
	fireEvent.load(screen.getByRole("img", { name: "Santa Cruz" }));
	expect(screen.queryByRole("status", { name: "Loading photo" })).not.toBeInTheDocument();
});
