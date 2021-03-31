import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import Review from "../components/Review.component";
import { GetRestContext } from "../contexts/RestaurantsProvider";

const RestaurantDetail = () => {
	const { id } = useParams();
	const { selected, setselected } = GetRestContext();

	useEffect(() => {
		const fetchData = async () => {
			let response = await RestaurantFinder.get(`/${id}`);
			setselected(response.data.data);
		};
		fetchData();
	}, [setselected, id]);

	return (
		<div>
			{selected && (
				<div>
					<h1> {selected.name} Details</h1>
					<div className="row row-cols-3 mb-2 mr-4">
						<Review />
						<Review />
						<Review />
						<Review />
						<Review />
						<Review />
					</div>
				</div>
			)}
		</div>
	);
};

export default RestaurantDetail;
