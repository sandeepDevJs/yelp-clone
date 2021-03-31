import React, { useRef, useEffect, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useHistory } from "react-router-dom";

const Update = ({ match }) => {
	const history = useHistory();

	const nameRef = useRef();
	const locationRef = useRef();
	const priceRef = useRef();

	const [loading, setloading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await RestaurantFinder.get(`/${match.params.id}`);
				nameRef.current.value = response.data.data.name;
				locationRef.current.value = response.data.data.location;
				priceRef.current.value = response.data.data.price_range;
			} catch (error) {}
		};

		fetchData();
	}, [match]);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setloading(true);
		try {
			await RestaurantFinder.put(
				`${match.params.id}`,
				{
					name: nameRef.current.value,
					location: locationRef.current.value,
					price_range: priceRef.current.value,
				},
				{ headers: { "Content-Type": "application/json" } }
			);
			history.push("/");
		} catch (err) {
			setloading(false);
		}
	};

	return (
		<div>
			<h1>Update</h1>
			<form onSubmit={onSubmitHandler}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						className="form-control"
						ref={nameRef}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input
						type="text"
						name="location"
						className="form-control"
						ref={locationRef}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price_range">Price Range</label>
					<select className="form-control" ref={priceRef} required>
						<option disabled> Price Range </option>
						<option value="1">$</option>
						<option value="2">$$</option>
						<option value="3">$$$</option>
						<option value="4">$$$$</option>
						<option value="5">$$$$$</option>
					</select>
				</div>

				<button type="submit" disabled={loading} className="btn btn-success">
					Update
				</button>
			</form>
		</div>
	);
};

export default Update;
