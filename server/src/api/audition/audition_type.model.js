const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");

class AuditionType extends Model {
  static tableName = tableNames.audition_type;
}

module.exports = AuditionType;
