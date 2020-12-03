const Knex = require("knex");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function getRandomRow(knex, table_name) {
  return knex(table_name).orderByRaw("random()").select("id").first();
}

//Adding voiceover audition
/** @param {Knex} knex*/
exports.seed = async function (knex) {
  const [
    user,
    city,
    role_type,
    voice_type,
    tag,
    voiceover,
  ] = await Promise.all([
    getRandomRow(knex, tableNames.user),
    getRandomRow(knex, tableNames.city),
    getRandomRow(knex, tableNames.role_type),
    getRandomRow(knex, tableNames.voice_type),
    getRandomRow(knex, tableNames.tag),
    knex(tableNames.audition_type)
      .select("id")
      .where({ name: "Voiceover" })
      .first(),
  ]);

  const [audition] = await knex(tableNames.audition).insert(
    {
      company_name: faker.company.companyName(),
      name: faker.company.bs(),
      description: faker.lorem.paragraph(3),
      user_id: user.id,
      city_id: city.id,
      audition_type_id: voiceover.id,
      address: faker.address.streetAddress(),
    },
    ["id"]
  );

  await knex(tableNames.audition_tag).insert({
    audition_id: audition.id,
    tag_id: tag.id,
  });

  const [voice_attribute] = await knex(tableNames.voice_attribute).insert(
    {
      voice_type_id: voice_type.id,
    },
    ["id"]
  );

  const [requirement] = await knex(tableNames.requirement).insert(
    {
      voice_attribute_id: voice_attribute.id,
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
};
