import React, {useEffect} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { GetRestContext } from "../contexts/RestaurantsProvider";

const RestaurantList = () => {

	const { restaurants, setrestaurants } = GetRestContext()
	
	useEffect(() => {
		const fetchData = async () =>{
			try {
				let response = await RestaurantFinder.get("/") 
				setrestaurants(response.data.data)
			} catch (error) {
				
			}
		}

		fetchData()
	}, [setrestaurants])

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
					{ restaurants.map(restaurant => (
						
						<tr key={restaurant.id}>
						<td>{restaurant.name}</td>
						<td>{restaurant.location}</td>
						<td>{"$".repeat(restaurant.price_range)}</td>
						<td>Ratings</td>
						<td>
							<button className="btn btn-warning">Edit</button>
						</td>
						<td>
							<button className="btn btn-danger">Delete</button>
						</td>
					</tr>

					)) }
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;
