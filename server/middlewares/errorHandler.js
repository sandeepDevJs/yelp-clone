const ErrorResponse = require("../utils/errorResponse");

module.exports = (err, req, res, next) => {
	let error = { ...err };

	res
		.status(error.statusCode || 500)
		.send({ success: false, message: err.message });
};
