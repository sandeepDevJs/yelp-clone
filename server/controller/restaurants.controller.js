const pool = require("../config/db.config");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

const checkIdExists = async (id) => {
	const query = {
		text: "SELECT * FROM restaurants WHERE id=$1",
		values: [id],
	};

	let result = await pool.query(query);

	if (result.rows.length) {
		return true;
	}
	return false;
};

module.exports.getRestaurants = asyncHandler(async (req, res, next) => {
	const query = {
		text: "SELECT * FROM restaurants",
	};

	let result = await pool.query(query);

	res.send({ success: true, data: result.rows, count: result.rowCount });
});

module.exports.getRestaurantById = asyncHandler(async (req, res, next) => {
	const resId = req.params.id;

	if (!resId || !(await checkIdExists(resId))) {
		next(new ErrorResponse("We Didn't Find Any Data Associated To Id!", 400));
		return;
	}

	const query = {
		text: "SELECT * FROM restaurants WHERE id=$1",
		values: [resId],
	};

	let result = await pool.query(query);

	res.send({ success: true, data: result.rows[0], count: result.rowCount });
});

module.exports.updateRestaurantById = asyncHandler(async (req, res, next) => {
	const resId = req.params.id;
	const body = { ...req.body };

	if (!resId || !(await checkIdExists(resId))) {
		next(new ErrorResponse("We Didn't Find Any Data Associated To Id!", 400));
		return;
	}

	const query = {
		text: `UPDATE restaurants SET ${Object.keys(body).map(
			(column, idx) => `${column}=$${idx + 1}`
		)} WHERE id=${resId} returning *`,
		values: [...Object.values(body)],
	};

	let result = await pool.query(query);
	res
		.status(200)
		.send({
			success: true,
			data: result.rows[0],
			message: "Data Updated Successfully!",
		});
});
module.exports.deleteRestaurantById = asyncHandler(async (req, res, next) => {
	const resId = req.params.id;

	if (!resId || !(await checkIdExists(resId))) {
		next(new ErrorResponse("We Didn't Find Any Data Associated To Id!", 400));
		return;
	}

	const query = {
		text: "DELETE FROM restaurants WHERE id=$1",
		values: [resId],
	};

	let result = await pool.query(query);
	res
		.status(200)
		.send({ success: true, message: "Data Deleted Successfully!" });
});
module.exports.createRestaurantById = asyncHandler(async (req, res, next) => {
	const data = { ...req.body };

	const query = {
		text:
			"insert into restaurants (name, location, price_range) values($1, $2, $3)  returning *",
		values: [data.name, data.location, data.price_range],
	};

	let result = await pool.query(query);

	res
		.status(201)
		.send({
			success: true,
			message: "Data Added Successfully!",
			data: result.rows[0],
		});
});
