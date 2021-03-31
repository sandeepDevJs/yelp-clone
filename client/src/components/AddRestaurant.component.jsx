import React, { useRef, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { GetRestContext } from "../contexts/RestaurantsProvider";

const AddRestaurant = () => {
	const nameRef = useRef();
	const locationRef = useRef();
	const priceRef = useRef();

	const [loading, setloading] = useState(false);

	const { addRestaurants } = GetRestContext();

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setloading(true);
		try {
			let res = await RestaurantFinder.post(
				"/",
				{
					name: nameRef.current.value,
					location: locationRef.current.value,
					price_range: priceRef.current.value,
				},
				{ headers: { "Content-Type": "application/json" } }
			);

			addRestaurants(res.data.data);
			setloading(false);
		} catch (error) {
			setloading(false);
		}
	};

	return (
		<div className="mb-4">
			<form onSubmit={onSubmitHandler}>
				<div className="row">
					<div className="col">
						<input
							type="text"
							placeholder="name"
							className="form-control"
							ref={nameRef}
							required
						/>
					</div>

					<div className="col">
						<input
							type="text"
							placeholder="location"
							className="form-control"
							ref={locationRef}
							required
						/>
					</div>

					<div className="col">
						<select className="form-control" ref={priceRef} required>
							<option disabled> Price Range </option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
						</select>
					</div>

					<div className="col">
						<button
							type="submit"
							disabled={loading}
							className="btn btn-primary"
						>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;
