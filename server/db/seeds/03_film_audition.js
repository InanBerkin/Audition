const Knex = require("knex");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function getRandomRow(knex, table_name) {
  return knex(table_name).orderByRaw("random()").select("id").first();
}

async function generateFilmAudition(knex) {
  const [user, city, role_type, tag, gender, film] = await Promise.all([
    getRandomRow(knex, tableNames.user),
    getRandomRow(knex, tableNames.city),
    getRandomRow(knex, tableNames.role_type),
    getRandomRow(knex, tableNames.voice_type),
    getRandomRow(knex, tableNames.tag),
    getRandomRow(knex, tableNames.gender),
    knex(tableNames.audition_type).select("id").where({ name: "Film" }).first(),
  ]);

  const [audition] = await knex(tableNames.audition).insert(
    {
      company_name: faker.company.companyName(),
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(3),
      user_id: user.id,
      city_id: city.id,
      audition_type_id: film.id,
    },
    ["id"]
  );

  await knex(tableNames.audition_tag).insert({
    audition_id: audition.id,
    tag_id: tag.id,
  });

  const [physical_attribute] = await knex(tableNames.physical_attribute).insert(
    [
      {
        gender_id: gender.id,
        age: faker.random.number({ min: 3, max: 60 }),
      },
    ],
    ["id"]
  );

  const [requirement] = await knex(tableNames.requirement).insert(
    {
      physical_attribute_id: physical_attribute.id,
    },
    ["id"]
  );

  await knex(tableNames.role).insert({
    name: faker.company.catchPhraseNoun(),
    description: faker.lorem.paragraph(1),
    audition_id: audition.id,
    requirement_id: requirement.id,
    role_type_id: role_type.id,
  });
}

//Adding voiceover audition
/** @param {Knex} knex*/
exports.seed = async function (knex) {
  await generateFilmAudition(knex);
  await generateFilmAudition(knex);
  await generateFilmAudition(knex);
};
