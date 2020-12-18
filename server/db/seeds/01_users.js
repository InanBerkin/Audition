const Knex = require("knex");
const fetch = require("node-fetch");
const bcrypt = require("bcrypt");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");
require("dotenv").config();

/** @param {Knex} knex*/
function getRandomRow(knex, table_name) {
  return knex(table_name).orderByRaw("random()").first();
}

async function getRandomProfilePicture() {
  const res = await fetch("https://uifaces.co/api?limit=1", {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.UI_FACES,
      Accept: "application/json",
      "Cache-Control": "no-cache",
    },
  });

  const userData = await res.json();
  return userData[0].photo;
}

async function generateUser(knex) {
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

  const username = faker.name.findName();
  const photo = await getRandomProfilePicture();
  await knex(tableNames.user).insert([
    {
      email: `${username}@talent.com`,
      name: username,
      password: await bcrypt.hash("12345678", 10),
      profile_picture: photo,
      user_type_id: user_type.id,
      city_id: city.id,
      physical_attribute_id: physical_attribute.id,
    },
  ]);
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  await Promise.all(
    Array(8)
      .fill("")
      .map(() => generateUser(knex))
  );
};
