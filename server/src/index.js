const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    users.push({ email: req.body.email, password: hashedPassword });
    res.status(201).send();
  } catch (error) {
    console.error("SIGNUP Error", error);
    res.status(500).send();
  }
});

app.listen(PORT, function () {
  console.log("Server is running on http://localhost:" + PORT);
});
