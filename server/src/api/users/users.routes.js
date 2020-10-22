const express = require("express");
const User = require("./users.model");
const tableNames = require("../../constants/tableNames");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.query();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.getUser(id);
    if (!user) {
      const error = new Error("No user with the given id");
      res.status(403);
      throw error;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
