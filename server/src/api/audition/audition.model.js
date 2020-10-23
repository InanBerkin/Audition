const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const AuditionType = require("./audition_type.model");

class Audition extends Model {
  static tableName = tableNames.audition;

  static relationMappings = {
    audition_type: {
      relation: Model.HasOneRelation,
      modelClass: AuditionType,
      join: {
        from: `${tableNames.audition}.id`,
        to: `${tableNames.audition_type}.id`,
      },
    },
  };

  static async getAudition(id) {
    return await this.query().withGraphFetched("audition_type").findById(id);
  }
}

module.exports = Audition;
