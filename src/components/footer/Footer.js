import React from "react";
import { Book, Coffee, Film, Instagram, Linkedin, Mail } from "react-feather";

import {
	BELI_URL,
	EMAIL_URL,
	GOODREADS_URL,
	INSTAGRAM_URL,
	LETTERBOXD_URL,
	LINKEDIN_URL,
} from "../../content/links";

import "../../assets/css/footer.css";

// Footer icons, in display order.
const LINKS = [
	{ label: "Instagram", href: INSTAGRAM_URL, Icon: Instagram },
	{ label: "Beli", href: BELI_URL, Icon: Coffee },
	{ label: "Letterboxd", href: LETTERBOXD_URL, Icon: Film },
	{ label: "Goodreads", href: GOODREADS_URL, Icon: Book },
	{ label: "LinkedIn", href: LINKEDIN_URL, Icon: Linkedin },
	{ label: "Email", href: EMAIL_URL, Icon: Mail },
];

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-links">
				{LINKS.map(({ label, href, Icon }) => {
					const external = !href.startsWith("mailto:");
					return (
						<a
							key={label}
							className="footer-link"
							href={href}
							aria-label={label}
							target={external ? "_blank" : undefined}
							rel={external ? "noopener noreferrer" : undefined}
						>
							<Icon size={20} aria-hidden="true" />
						</a>
					);
				})}
			</div>
			<p className="footer-copyright">&#169; 2027 Sajal Sharma</p>
		</footer>
	);
}

export default Footer;
