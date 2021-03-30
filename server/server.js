const app = require("./index")

const PORT = process.env.PORT || 3005

const server = app.listen(PORT, () => console.log(`server connected to port ${PORT}!`) )

//Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err, promise) => {
	console.log("OOPS!!, Something Went Terribly Wrong!");
	if (process.env.NODE_ENV === "development") {
		console.log(err);
	}
	server.close(() => process.exit(1));
});

//Handle Uncought Exceptions
process.on("uncaughtException", (error) => {
	if (config.env === "development") {
		console.log("Oh my god, something terrible happened: ", error);
	} else {
		console.log("Oh my god, something terrible happened: ");
	}
});