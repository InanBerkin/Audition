const db = require("../../db");
const tableNames = require("../../constants/tableNames");

function find() {
  return db(tableNames.city).select("*");
}

function get(id) {
  return db(tableNames.city).select("*").where({ id }).first();
}

module.exports = { find, get };
