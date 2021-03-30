import React from "react";

const RestaurantList = () => {
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
					<tr>
						<td>abc</td>
						<td>nyc</td>
						<td>$$$</td>
						<td>Ratings</td>
						<td>
							<button className="btn btn-warning">Edit</button>
						</td>
						<td>
							<button className="btn btn-danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;
