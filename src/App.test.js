import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the greeting and the original paragraphs verbatim", () => {
	render(<App />);

	expect(screen.getByRole("heading", { level: 1, name: "Hi, I'm Sajal." })).toBeInTheDocument();
	expect(
		screen.getByText(/I'm a software engineer on the Wallets, Payments, and Commerce team at Apple/)
	).toBeInTheDocument();
	expect(
		screen.getByText(/I'm interested in financial technology and quantitative finance/)
	).toBeInTheDocument();
	expect(screen.getByText(/teaching assistant for the Financial Technology course/)).toBeInTheDocument();
	expect(
		screen.getByText(/I've learned how to ski, run a few half and full marathons, and rediscovered reading/)
	).toBeInTheDocument();
	expect(screen.getByText(/I like experimenting with my espresso machine at home, but I still have fun exploring local coffee shops. Most of all, I enjoy traveling the world, trying new foods, and capturing it all with my camera/)).toBeInTheDocument();
	expect(screen.getByText(/If you'd like to get in touch/)).toBeInTheDocument();
});

test("keeps the hero prose free of links, with the email address as plain text", () => {
	render(<App />);

	const hero = screen.getByRole("banner");
	expect(hero.querySelectorAll("a")).toHaveLength(0);
	expect(hero).toHaveTextContent("reach out to me at sajal16.sharma@gmail.com!");
	expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
		"href",
		"mailto:sajal16.sharma@gmail.com"
	);
});

test("orders the footer icons and shows the 2027 copyright", () => {
	render(<App />);

	const footer = screen.getByRole("contentinfo");
	const labels = Array.from(footer.querySelectorAll("a")).map((link) =>
		link.getAttribute("aria-label")
	);
	expect(labels).toEqual(["Instagram", "Beli", "Letterboxd", "Goodreads", "LinkedIn", "Email"]);
	expect(screen.getByText("© 2027 Sajal Sharma")).toBeInTheDocument();
});

test("links the footer icons to each profile", () => {
	render(<App />);

	const expected = {
		LinkedIn: "https://www.linkedin.com/in/sajal-sharma/",
		Instagram: "https://www.instagram.com/sajal.jpg/",
		Beli: "https://beliapp.co/app/ssajjall",
		Letterboxd: "https://letterboxd.com/ssajjall/",
		Goodreads: "https://www.goodreads.com/ssajjall",
	};
	Object.entries(expected).forEach(([name, href]) => {
		expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
	});
});

const INTRO =
	"Over the years, I've developed an interest in photography. Here are some of my favorite photos I've taken!";

test("introduces photography on the home page and links to the gallery", () => {
	window.location.hash = "";
	render(<App />);

	expect(screen.getByText(INTRO)).toBeInTheDocument();
	expect(screen.queryAllByRole("button", { name: /^Open photo of / })).toHaveLength(0);
	expect(screen.getByRole("link", { name: "Photography" })).toHaveAttribute("href", "#/photography");
});

test("shows every photo from the old gallery on the photography page and opens one", () => {
	window.location.hash = "";
	render(<App />);
	fireEvent.click(screen.getByRole("link", { name: "Photography" }));

	expect(screen.getByRole("heading", { level: 2, name: "Photography" })).toBeInTheDocument();
	expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute("href", "#/");
	expect(screen.getByText(INTRO)).toBeInTheDocument();
	expect(screen.getAllByRole("button", { name: /^Open photo of / })).toHaveLength(18);

	fireEvent.click(
		screen.getByRole("button", { name: "Open photo of Point Reyes Lighthouse - Inverness, California" })
	);
	expect(
		screen.getByRole("dialog", { name: "Point Reyes Lighthouse - Inverness, California" })
	).toBeInTheDocument();
	window.location.hash = "";
});
