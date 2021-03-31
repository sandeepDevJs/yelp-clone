import React, { useState, createContext, useContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
	const [restaurants, setrestaurants] = useState([]);

	const addRestaurants = (rest) => {
		setrestaurants((prevRestData) => [...prevRestData, rest]);
	};

	return (
		<RestaurantsContext.Provider
			value={{ restaurants, setrestaurants, addRestaurants }}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};

export const GetRestContext = () => useContext(RestaurantsContext);

export default RestaurantsProvider;
