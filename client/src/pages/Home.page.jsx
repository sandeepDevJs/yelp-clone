import React from "react";
import AddRestaurant from "../components/AddRestaurant.component";
import Header from "../components/Header.component";
import RestaurantList from "../components/RestaurantList.component";

const Home = () => {
	return (
		<div>
			<Header />
			<AddRestaurant />
			<RestaurantList />
		</div>
	);
};

export default Home;
