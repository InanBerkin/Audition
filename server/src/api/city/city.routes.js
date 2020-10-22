const express = require("express");
const City = require("./city.model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const cities = await City.query();
  res.json(cities);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const city = await City.query().findById(parseInt(id) || 0);
    if (city) {
      return res.json(city);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
