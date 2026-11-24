import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

import "../../assets/css/photography.css";

export const PHOTOGRAPHY_PATH = "/photography";
export const HOME_PATH = "/";

// The photography heading and intro sentence. On the home page the heading is a button to the
// gallery; on the gallery an arrow-only button beside the heading leads back home.
function PhotographyIntro({ linkToGallery = false }) {
	return (
		<div className="photography__intro">
			{linkToGallery ? (
				<h2 id="photography-heading" className="photography__heading">
					<Link className="photography__link" to={PHOTOGRAPHY_PATH}>
						Photography
						<ArrowRight size={24} aria-hidden="true" />
					</Link>
				</h2>
			) : (
				<div className="photography__title">
					<Link className="photography__back" to={HOME_PATH} aria-label="Back to home">
						<ArrowLeft size={24} aria-hidden="true" />
					</Link>
					<h2 id="photography-heading" className="photography__heading">
						Photography
					</h2>
				</div>
			)}
			<p className="photography__text">
				Over the years, I've developed an interest in photography. Here are some of my favorite
				photos I've taken!
			</p>
		</div>
	);
}

export default PhotographyIntro;
