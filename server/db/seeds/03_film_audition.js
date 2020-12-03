const Knex = require("knex");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function getRandomRow(knex, table_name, has_alias = false) {
  if (has_alias) {
    return knex(table_name)
      .orderByRaw("random()")
      .select(`id as ${table_name}_id`)
      .first();
  }
  return knex(table_name).orderByRaw("random()").select("id").first();
}

function getRandomPhysicalAttributes(knex) {
  return Promise.all([
    getRandomRow(knex, tableNames.gender, true),
    getRandomRow(knex, tableNames.ethnicity, true),
    getRandomRow(knex, tableNames.hair_color, true),
    getRandomRow(knex, tableNames.eye_color, true),
    getRandomRow(knex, tableNames.body_type, true),
  ]);
}

/** @param {Knex} knex*/
async function generateFilmAudition(knex) {
  const [
    user,
    city,
    role_type,
    tag,
    random_physical_attribute,
    film,
  ] = await Promise.all([
    getRandomRow(knex, tableNames.user),
    getRandomRow(knex, tableNames.city),
    getRandomRow(knex, tableNames.role_type),
    getRandomRow(knex, tableNames.tag),
    getRandomPhysicalAttributes(knex),
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
      address: faker.address.streetAddress(true),
    },
    ["id"]
  );

  await knex(tableNames.audition_tag).insert({
    audition_id: audition.id,
    tag_id: tag.id,
  });

  const [physical_attribute] = await knex(tableNames.physical_attribute).insert(
    {
      ...Object.assign({}, ...random_physical_attribute), //Merge array of objects and spread
    },
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

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  await Promise.all(
    Array(5)
      .fill("")
      .map(() => generateFilmAudition(knex))
  );
};
