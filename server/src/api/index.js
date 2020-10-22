const express = require("express");
const glob = require("glob");
const router = express.Router();
require("../db");

let routes = glob.sync("**/*.routes.js", { cwd: "./src/api" });
routes = routes.map((route) => ({
  api_path: "/" + route.split("/")[0],
  routeFunc: require("./" + route),
}));

for (const { api_path, routeFunc } of routes) {
  router.use(api_path, routeFunc);
}

module.exports = router;
