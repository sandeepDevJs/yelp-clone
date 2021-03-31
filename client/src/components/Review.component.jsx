import React from "react";
import RatingStar from "./RatingStar.component";

const Review = () => {
	return (
		<div
			className="card text-white bg-primary mb-3"
			style={{ maxWidth: "30%", marginRight: "10px" }}
		>
			<div className="card-header">
				<span>NAme</span>
				<span>
					<RatingStar />
				</span>
			</div>
			<div className="card-body">
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
			</div>
		</div>
	);
};

export default Review;
