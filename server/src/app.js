const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const middlewares = require("./middlewares");
const api = require("./api");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
