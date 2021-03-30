const pool = require("../config/db.config");
const asyncHandler = require("../utils/asyncHandler");

module.exports.getRestaurants = asyncHandler(async (req, res, next) => {
	const query = {
		text: "SELECT * FROM restaurants",
	};

	let result = await pool.query(query);

	res.send({ success: true, data: result.rows, count: result.rowCount });
});
module.exports.getRestaurantById = asyncHandler(async (req, res, next) => {
	res.send({ name: "hello" });
});
module.exports.updateRestaurantById = asyncHandler(async (req, res, next) => {
	res.send({ name: "hello" });
});
module.exports.deleteRestaurantById = asyncHandler(async (req, res, next) => {
	res.send({ name: "hello" });
});
module.exports.createRestaurantById = asyncHandler(async (req, res, next) => {
	res.send({ name: "hello" });
});
