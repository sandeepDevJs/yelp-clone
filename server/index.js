const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const routes = require("./routes/index");

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use("/api", routes());

//404 Handler
app.use(notFoundHandler);

//Error Handler
app.use(errorHandler);

module.exports = app;
