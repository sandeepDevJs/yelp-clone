const { Router } = require("express");
const resRoutes = require("./restaurants.routes");
const router = Router();

module.exports = () => {
	router.use("/v1/restaurants", resRoutes);
	return router;
};
