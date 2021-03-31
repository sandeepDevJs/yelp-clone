import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dotenv from "dotenv";
import RestaurantsProvider from "./contexts/RestaurantsProvider";
import Home from "./pages/Home.page";
import RestaurantDetail from "./pages/RestaurantDetail.page";
import Update from "./pages/Update.page";
import "./index.css";

const App = () => {
	dotenv.config();

	return (
		<RestaurantsProvider>
			<div className="container">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/restaurants/:id/update" component={Update} />
						<Route exact path="/restaurants/:id" component={RestaurantDetail} />
					</Switch>
				</Router>
			</div>
		</RestaurantsProvider>
	);
};

export default App;
