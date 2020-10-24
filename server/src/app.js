const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("./db");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.post("/:route", (req, res) => {
  try {
    const handler = require(`./handlers/${req.params.route}`);
    if (!handler) {
      return res.status(404).json({
        message: `Not Found`,
      });
    }
    return handler(req, res);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: `unexpected error occured`,
      stack: e.stack,
    });
  }
});

module.exports = app;
