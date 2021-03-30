const { Router } = require("express");
const {
	getRestaurants,
	getRestaurantById,
	updateRestaurantById,
	deleteRestaurantById,
	createRestaurantById,
} = require("../controller/restaurants.controller");

const router = Router();

router.route("/").get(getRestaurants).post(createRestaurantById);

router
	.route("/:id")
	.get(getRestaurantById)
	.put(updateRestaurantById)
	.delete(deleteRestaurantById);

module.exports = router;
