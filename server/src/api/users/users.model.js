const { Model } = require("objection");
const tableNames = require("../../constants/tableNames");
const UserType = require("./user_type.model.js");
const City = require("../city/city.model.js");

class User extends Model {
  static tableName = tableNames.user;

  static relationMappings = {
    user_type: {
      relation: Model.HasOneRelation,
      modelClass: UserType,
      join: {
        from: `${tableNames.user}.id`,
        to: `${tableNames.user_type}.id`,
      },
    },
    city: {
      relation: Model.HasOneRelation,
      modelClass: City,
      join: {
        from: `${tableNames.user}.id`,
        to: `${tableNames.city}.id`,
      },
    },
  };

  static async getUser(id) {
    return await this.query()
      .withGraphFetched("user_type")
      .withGraphFetched("city")
      .select("name", "profile_picture", "email")
      .findById(id);
  }
}

module.exports = User;
