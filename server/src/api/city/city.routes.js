const express = require("express");
const queries = require("./city.queries");

const router = express.Router();

router.get("/", async (req, res) => {
  const cities = await queries.find();
  res.json(cities);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const city = await queries.get(parseInt(id) || 0);
    if (city) {
      return res.json(city);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
