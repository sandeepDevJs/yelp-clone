import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { GetRestContext } from "../contexts/RestaurantsProvider";

const RestaurantList = () => {
	const { restaurants, setrestaurants } = GetRestContext();
	const history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await RestaurantFinder.get("/");
				setrestaurants(response.data.data);
			} catch (error) {}
		};

		fetchData();
	}, [setrestaurants]);

	const deleteRest = async (e, resId) => {
		e.stopPropagation();
		try {
			await RestaurantFinder.delete(`/${resId}`);
			setrestaurants((prevRest) =>
				prevRest.filter((rests) => rests.id !== resId)
			);
		} catch (err) {}
	};

	return (
		<div className="list-group">
			<table className="table table-hover table-dark">
				<thead>
					<tr className="bg-primary">
						<th scope="col">Restaurants</th>
						<th scope="col">Locations</th>
						<th scope="col">Price Range</th>
						<th scope="col">Ratings</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{restaurants.map((restaurant) => (
						<tr className="det-link" key={restaurant.id}>
							<td onClick={() => history.push(`/restaurants/${restaurant.id}`)}>
								<span>{restaurant.name}</span>
							</td>
							<td>{restaurant.location}</td>
							<td>{"$".repeat(restaurant.price_range)}</td>
							<td>Ratings</td>
							<td>
								<button
									className="btn btn-warning"
									onClick={(e) => {
										e.stopPropagation();
										history.push(`/restaurants/${restaurant.id}/update`);
									}}
								>
									Update
								</button>
							</td>
							<td>
								<button
									onClick={(e) => deleteRest(e, restaurant.id)}
									className="btn btn-danger"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;
