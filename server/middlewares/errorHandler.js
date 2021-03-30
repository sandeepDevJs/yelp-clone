const ErrorResponse = require("../utils/errorResponse");

module.exports = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;

	if (err.code == 42703) {
		error = new ErrorResponse("some provided fields does not exist!", 400)
	}

	res
		.status(error.statusCode || 500)
		.send({ success: false, message: error.message });
};
