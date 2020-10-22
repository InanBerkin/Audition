const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");

class UserType extends Model {
  static tableName = tableNames.user_type;
}

module.exports = UserType;
