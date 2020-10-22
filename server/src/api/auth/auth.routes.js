const express = require("express");
const User = require("../users/users.model");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { name, email, password, profile_picture, user_type_id } = req.body;
  if (!name || !email || !password || !profile_picture || !user_type_id) {
    res.status(500).send({
      status: res.statusCode,
      message: "Missing info for signup",
    });
  }
  const createUser = {
    name,
    email,
    password,
    profile_picture,
    user_type_id,
  };
  try {
    const existingUser = await User.query().where({ email }).first();
    if (existingUser) {
      const error = new Error("Email in use");
      res.status(403);
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertedUser = await User.query().insert({
      ...createUser,
      password: hashedPassword,
    });
    delete insertedUser.password;
    const payload = {
      id: insertedUser.id,
      name,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500).send({
      status: res.statusCode,
      message: "Missing info for signin",
    });
  }
  try {
    const user = await User.query().where({ email }).first();
    if (!user) {
      const error = new Error("Invalid login");
      res.status(401);
      throw error;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      const error = new Error("Invalid login");
      res.status(401);
      throw error;
    }
    const payload = {
      id: user.id,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
