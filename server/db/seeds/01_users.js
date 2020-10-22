const Knex = require("knex");
const bcrypt = require("bcrypt");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function getRandomRow(knex, table_name) {
  return knex(table_name).orderByRaw("random()").first();
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  const [
    eye_color,
    hair_color,
    gender,
    ethnicity,
    body_type,
    user_type,
    city,
  ] = await Promise.all([
    getRandomRow(knex, tableNames.eye_color),
    getRandomRow(knex, tableNames.hair_color),
    getRandomRow(knex, tableNames.gender),
    getRandomRow(knex, tableNames.ethnicity),
    getRandomRow(knex, tableNames.body_type),
    getRandomRow(knex, tableNames.user_type),
    getRandomRow(knex, tableNames.city),
  ]);

  const [physical_attribute] = await knex(tableNames.physical_attribute).insert(
    [
      {
        eye_color_id: eye_color.id,
        hair_color_id: hair_color.id,
        gender_id: gender.id,
        ethnicity_id: ethnicity.id,
        body_type_id: body_type.id,
        height: faker.random.number({ min: 100, max: 210 }),
        age: faker.random.number({ min: 3, max: 60 }),
      },
    ],
    ["id"]
  );

  await knex(tableNames.user).insert([
    {
      email: "talent@talent.com",
      name: faker.name.findName(),
      password: await bcrypt.hash("12345678", 10),
      profile_picture: faker.internet.avatar(),
      user_type_id: user_type.id,
      city_id: city.id,
      physical_attribute_id: physical_attribute.id,
    },
  ]);
};
