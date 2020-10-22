const Knex = require("knex");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function getRandomRow(knex, table_name) {
  return knex(table_name).orderByRaw("random()").select("id").first();
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  const [user, city, audition_type, role_type] = await Promise.all([
    getRandomRow(knex, tableNames.user),
    getRandomRow(knex, tableNames.city),
    getRandomRow(knex, tableNames.audition_type),
    getRandomRow(knex, tableNames.role_type),
  ]);

  const [audition] = await knex(tableNames.audition).insert(
    {
      company_name: faker.company.companyName(),
      name: faker.company.bs(),
      description: faker.lorem.paragraph(3),
      user_id: user.id,
      city_id: city.id,
      audition_type_id: audition_type.id,
    },
    ["id"]
  );

  await knex(tableNames.role).insert({
    name: faker.fake(
      "{{company.catchPhraseAdjective}} {{company.catchPhraseNoun}}"
    ),
    description: faker.lorem.paragraph(3),
    audition_id: audition.id,
    role_type_id: role_type.id,
  });
};
