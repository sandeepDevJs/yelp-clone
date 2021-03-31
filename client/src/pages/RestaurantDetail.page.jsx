import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>Details</h1>
		</div>
	);
};

export default RestaurantDetail;
