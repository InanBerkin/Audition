const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");

class City extends Model {
  static tableName = tableNames.city;
}

module.exports = City;
